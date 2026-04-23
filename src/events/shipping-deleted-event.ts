import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShippingDeletedEvent {
  subjectRoot: Subjects.ShippingsSrv
  subject: Subjects.ShippingDeleted
  streamName: Streams.ShippingsStream
  data: { id: string; version: number }
}
