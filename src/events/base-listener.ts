import { NatsConnection, AckPolicy, JsMsg, nanos } from 'nats'
import { Subjects } from './subjects'
import { Streams } from './streams'
import { log } from '..'

interface Event {
  subjectRoot: Subjects
  subject: Subjects
  streamName: Streams
  data: any
}

export abstract class Listener<T extends Event> {
  abstract subjectRoot: T['subjectRoot']
  abstract subject: T['subject']
  abstract streamName: T['streamName']
  abstract queueGroupName: string
  abstract onMessage(data: T['data'], msg: JsMsg): void
  protected ackWait = 5 * 1000

  constructor(protected client: NatsConnection) {}

  async listen() {
    await this.streamLivenessCheck()

    // Access the JetStream client
    const js = this.client.jetstream()
    const jsm = await js.jetstreamManager()

    // create durable consumer
    await jsm.consumers.add(this.streamName, {
      ack_policy: AckPolicy.Explicit,
      durable_name: this.queueGroupName,
      ack_wait: nanos(this.ackWait),
    })
    log(
      `Listening to subject: ${this.subjectRoot}.${this.subject} / ${this.queueGroupName}`
    )

    // Simply specifying the name of the stream
    const c = await js.consumers.get(this.streamName, this.queueGroupName)

    const iter = await c.consume()
    for await (const m of iter) {
      log(`Message received: ${m.subject} / ${this.queueGroupName}`)

      const parsedData = this.parseMessage(m)
      this.onMessage(parsedData, m)
    }
  }

  private async streamLivenessCheck() {
    const js = this.client.jetstream()
    try {
      await js.streams.get(this.streamName)
    } catch (error) {
      const jsm = await js.jetstreamManager()

      const subj = this.subjectRoot
      const name = this.streamName

      // create the stream
      await jsm.streams.add({
        name: name,
        subjects: [`${subj}.>`],
      })
    }
  }

  parseMessage(msg: JsMsg) {
    const data = msg.data
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString())
  }
}
