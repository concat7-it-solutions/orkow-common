import { connect as connectNode, NatsConnection } from 'nats'
import { log } from '.'

class NatsWrapper {
  private _client?: NatsConnection
  private _streamName?: string

  get client() {
    if (!this._client)
      throw new Error('Cannot access NATS client before connecting.')
    return this._client
  }

  get streamName() {
    if (!this._streamName) throw new Error('No stream yet to set.')
    return this._streamName
  }

  async connect(
    subj: string,
    clientId: string,
    servers: string | string[],
    user: string,
    pass: string
  ) {
    this._client = await connectNode({
      name: clientId,
      servers,
      user,
      pass,
    })
    log(`🛰️ connected to ${this.client.getServer()}`)

    // Access the JetStream client
    const js = this.client.jetstream()
    const jsm = await js.jetstreamManager()

    this._streamName = `EVENTS_${subj}`

    // create the stream
    await jsm.streams.add({
      name: this.streamName,
      subjects: [`${subj}.>`],
    })
    log(`stream ${this.streamName} added`)
  }
}

export const natsWrapper = new NatsWrapper()
