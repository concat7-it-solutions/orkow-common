import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShippingUpdatedEvent {
  subjectRoot: Subjects.ShippingsSrv
  subject: Subjects.ShippingUpdated
  streamName: Streams.ShippingsStream
  data: {
    id: string
    version: number
    uid: string
    city?: string
    charge: number
    expressCharge: number
    shopId: string
  }
}
