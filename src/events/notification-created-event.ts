import { Streams } from './streams'
import { Subjects } from './subjects'

export interface NotificationCreatedEvent {
  subjectRoot: Subjects.NotificationsSrv
  subject: Subjects.NotificationCreated
  streamName: Streams.NotificationsStream
  data: {
    id: string
    content: string
    notifyType: string
    sourceId?: string
    userId?: string
    customerId?: string
    shopId?: string
  }
}
