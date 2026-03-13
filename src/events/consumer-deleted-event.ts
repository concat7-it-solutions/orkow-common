import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ConsumerDeletedEvent {
  subjectRoot: Subjects.ConsumersSrv
  subject: Subjects.ConsumerDeleted
  streamName: Streams.ConsumersStream
  data: { id: string; version: number }
}
