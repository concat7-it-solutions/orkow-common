import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShippingCreatedEvent {
  subjectRoot: Subjects.ShippingsSrv
  subject: Subjects.ShippingCreated
  streamName: Streams.ShippingsStream
  data: {
    id: string
    uid: string
    city?: string
    charge: number
    expressCharge: number
    shopId: string
  }
}
