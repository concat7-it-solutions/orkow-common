import { Streams } from './streams'
import { Subjects } from './subjects'

export interface BillingCreatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.BillingCreated
  streamName: Streams.EnrollsStream
  data: {
    id: string
    amount: number
    currency?: string
    billingAddressId?: string
    uid?: string
  }
}
