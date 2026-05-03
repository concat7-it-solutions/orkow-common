import { Streams } from './streams'
import { Subjects } from './subjects'

export interface PackageCreatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.PackageCreated
  streamName: Streams.EnrollsStream
  data: {
    id: string
    backupCharge?: number
    imageProcessingCharge?: number
    price: number
    vat: number
  }
}
