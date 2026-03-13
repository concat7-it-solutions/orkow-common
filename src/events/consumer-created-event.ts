import { Streams } from './streams'
import { Subjects } from './subjects'
import { CreateCustomerInput } from './types/consumer-create-input'

export interface ConsumerCreatedEvent {
  subjectRoot: Subjects.ConsumersSrv
  subject: Subjects.ConsumerCreated
  streamName: Streams.ConsumersStream
  data: CreateCustomerInput & { id: string }
}
