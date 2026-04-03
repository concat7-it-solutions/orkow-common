import { Streams } from './streams'
import { Subjects } from './subjects'
import { CreateBillingInput } from './types/billing-create-input'

export interface BillingCreatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.BillingCreated
  streamName: Streams.EnrollsStream
  data: CreateBillingInput & { id: string; amount: number }
}
