import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderConfirmedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderConfirmed
  streamName: Streams.OrdersStream
  data: {
    id: string
    version: number
    items: {
      uid: string
      quantity: number
    }[]
  }
}
