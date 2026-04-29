import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderCreatedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderCreated
  streamName: Streams.OrdersStream
  data: {
    id: string
  }
}
