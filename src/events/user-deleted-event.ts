import { Streams } from './streams'
import { Subjects } from './subjects'

export interface UserDeletedEvent {
  subjectRoot: Subjects.UsersSrv
  subject: Subjects.UserDeleted
  streamName: Streams.UsersStream
  data: { id: string }
}
