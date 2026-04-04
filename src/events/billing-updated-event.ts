import { Streams } from './streams'
import { Subjects } from './subjects'
import { UpdateBillingInput } from './types/billing-update-input'

export interface BillingUpdatedEvent {
  subjectRoot: Subjects.EnrollsSrv
  subject: Subjects.BillingUpdated
  streamName: Streams.EnrollsStream
  data: UpdateBillingInput & {
    id: string
    version: number
    amount?: number
  }
}
