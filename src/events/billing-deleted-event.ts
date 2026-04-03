import { Streams } from './streams'
import { Subjects } from './subjects'

export interface BillingDeletedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.BillingDeleted
  streamName: Streams.EnrollsStream
  data: { id: string; version: number }
}
