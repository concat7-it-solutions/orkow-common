import { Streams } from './streams'
import { Subjects } from './subjects'
import { UpdateUserInput } from './types/user-update-input'

export interface UserUpdatedEvent {
  subjectRoot: Subjects.UsersSrv
  subject: Subjects.UserUpdated
  streamName: Streams.UsersStream
  data: UpdateUserInput & { id: string }
}
