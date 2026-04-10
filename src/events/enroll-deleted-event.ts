import { Streams } from './streams'
import { Subjects } from './subjects'

export interface EnrollDeletedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.EnrollDeleted
  streamName: Streams.EnrollsStream
  data: { id: string; version: number }
}
