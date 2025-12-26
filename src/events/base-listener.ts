import { NatsConnection } from '@nats-io/transport-node'
import {
  AckPolicy,
  jetstream,
  jetstreamManager,
  JsMsg,
} from '@nats-io/jetstream'
import { Subjects } from './subjects'

interface Event {
  subject: Subjects
  data: any
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject']
  abstract queueGroupName: string
  abstract streamName: string
  abstract onMessage(data: T['data'], msg: JsMsg): void
  private client: NatsConnection
  protected ackWait = 5 * 1000

  constructor(client: NatsConnection) {
    this.client = client
  }

  async listen() {
    const jsm = await jetstreamManager(this.client)

    // create durable consumer
    await jsm.consumers.add(this.streamName, {
      ack_policy: AckPolicy.Explicit,
      durable_name: this.queueGroupName,
      ack_wait: this.ackWait,
    })

    // Simply specifying the name of the stream
    const js = jetstream(this.client)
    const c2 = await js.consumers.get(this.streamName, this.queueGroupName)

    const iter = await c2.fetch({ max_messages: 3 })
    for await (const m of iter) {
      console.log(`Message received: ${m.subject} / ${this.queueGroupName}`)

      const parsedData = this.parseMessage(m)
      this.onMessage(parsedData, m)
      m.ack()
    }
  }

  parseMessage(msg: JsMsg) {
    const data = msg.data
    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString())
  }
}
