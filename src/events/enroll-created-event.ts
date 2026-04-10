import { Streams } from './streams'
import { Subjects } from './subjects'

export interface EnrollCreatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.EnrollCreated
  streamName: Streams.EnrollsStream
  data: {
    id: string
    packageId: string
    backupEnable?: boolean
  }
}
