import { Streams } from './streams'
import { Subjects } from './subjects'

export interface PackageUpdatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.PackageUpdated
  streamName: Streams.EnrollsStream
  data: {
    id: string
    version: number
    backupCharge?: number
    price: number
    vat: number
    isActive?: boolean
  }
}
