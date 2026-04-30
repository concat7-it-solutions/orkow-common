import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderUpdatedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderUpdated
  streamName: Streams.OrdersStream
  data: {
    id: string
    version: number
    currency?: string
    total?: number
    paymentStatus?: string
    status?: string
  }
}
