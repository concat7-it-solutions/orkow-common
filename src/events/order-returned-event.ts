import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderReturnedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderReturned
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
