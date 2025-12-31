import { NatsConnection } from 'nats'
import { Subjects } from './subjects'

interface Event {
  subjectRoot: Subjects
  subject: Subjects
  data: any
}

export abstract class Publisher<T extends Event> {
  abstract subjectRoot: T['subjectRoot']
  abstract subject: T['subject']

  constructor(private client: NatsConnection) {}

  publish(data: T['data']) {
    console.log(`Event published to subject: ${this.subject}`, data)

    // Access the JetStream client
    const js = this.client.jetstream()

    return js.publish(
      `${this.subjectRoot}.${this.subject}`,
      JSON.stringify(data)
    )
  }
}
