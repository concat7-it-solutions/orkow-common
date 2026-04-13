import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShopDeletedEvent {
  subjectRoot: Subjects.ShopsSrv
  subject: Subjects.ShopDeleted
  streamName: Streams.ShopsStream
  data: { id: string; version: number }
}
