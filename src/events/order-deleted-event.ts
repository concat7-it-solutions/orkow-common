import { Streams } from './streams'
import { Subjects } from './subjects'

export interface OrderDeletedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.OrderDeleted
  streamName: Streams.OrdersStream
  data: { id: string; version: number }
}
