import { Streams } from './streams'
import { Subjects } from './subjects'
import { UpdateCustomerInput } from './types/consumer-update-input'

export interface ConsumerUpdatedEvent {
  subjectRoot: Subjects.ConsumersSrv
  subject: Subjects.ConsumerUpdated
  streamName: Streams.ConsumersStream
  data: UpdateCustomerInput & { id: string; version: number }
}
