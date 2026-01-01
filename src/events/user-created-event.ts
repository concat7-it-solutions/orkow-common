import { Streams } from './streams'
import { Subjects } from './subjects'
import { CreateUserInput } from './types/user-create-input'

export interface UserCreatedEvent {
  subjectRoot: Subjects.UsersSrv
  subject: Subjects.UserCreated
  streamName: Streams.UsersStream
  data: CreateUserInput & { id: string }
}
