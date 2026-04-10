import { Streams } from './streams'
import { Subjects } from './subjects'

export interface PackageDeletedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.PackageDeleted
  streamName: Streams.EnrollsStream
  data: { id: string; version: number }
}
