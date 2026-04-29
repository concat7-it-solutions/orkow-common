import { Streams } from './streams'
import { Subjects } from './subjects'
import { ActionType } from './types/action-type'

export interface HistoryCreatedEvent {
  subjectRoot: Subjects.OrdersSrv
  subject: Subjects.HistoryCreated
  streamName: Streams.OrdersStream
  data: {
    title: string
    action: ActionType
    userId: string
    url?: string
    json?: string
    sourceId?: string
  }
}
