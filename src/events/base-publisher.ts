import { NatsConnection } from '@nats-io/transport-node'
import { jetstream } from '@nats-io/jetstream'
import { Subjects } from './subjects'

interface Event {
  subject: Subjects
  data: any
}

export abstract class Publisher<T extends Event> {
  abstract subject: T['subject']
  private client: NatsConnection

  constructor(client: NatsConnection) {
    this.client = client
  }

  publish(data: T['data']) {
    console.log('Publish to subjects: ' + this.subject, data)

    const js = jetstream(this.client)
    return js.publish(this.subject, JSON.stringify(data))
  }
}
