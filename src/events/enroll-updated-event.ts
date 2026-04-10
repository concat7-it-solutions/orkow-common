import { Streams } from './streams'
import { Subjects } from './subjects'

export interface EnrollUpdatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.EnrollUpdated
  streamName: Streams.EnrollsStream
  data: {
    id: string
    version: number
    packageId: string
    backupEnable?: boolean
    status?: string
  }
}
