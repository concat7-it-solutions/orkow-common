import { Streams } from './streams'
import { Subjects } from './subjects'

export interface AddressDeletedEvent {
  subjectRoot: Subjects.ProfileSrv
  subject: Subjects.AddressDeleted
  streamName: Streams.ProfileStream
  data: { id: string; version: number }
}
