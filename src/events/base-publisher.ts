import { NatsConnection } from 'nats'
import { Subjects } from './subjects'
import { Streams } from './streams'
import { log } from '..'

interface Event {
  subjectRoot: Subjects
  subject: Subjects
  streamName: Streams
  data: any
}

export abstract class Publisher<T extends Event> {
  abstract subjectRoot: T['subjectRoot']
  abstract subject: T['subject']
  abstract streamName: T['streamName']

  constructor(private client: NatsConnection) {}

  async publish(data: T['data']) {
    await this.streamLivenessCheck()
    log(`Event published to subject: ${this.subjectRoot}.${this.subject}`)

    // Access the JetStream client
    const js = this.client.jetstream()

    return js.publish(
      `${this.subjectRoot}.${this.subject}`,
      JSON.stringify(data)
    )
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
}
