import { Streams } from './streams'
import { Subjects } from './subjects'

export interface HistoryCreatedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.HistoryCreated
  streamName: Streams.OrdersStream
  data: {
    title: string
    action: string
    userId: string
    url?: string
    json?: string
    sourceId?: string
  }
}
