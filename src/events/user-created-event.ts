import { Streams } from './streams'
import { Subjects } from './subjects'

export interface UserCreatedEvent<T> {
  subjectRoot: Subjects.UsersSrv
  subject: Subjects.UserCreated
  streamName: Streams.UsersStream
  data: T
}
