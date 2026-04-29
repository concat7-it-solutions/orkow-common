import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderCanceledEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderCanceled
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
