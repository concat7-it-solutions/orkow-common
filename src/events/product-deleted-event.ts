import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ProductDeletedEvent {
  subjectRoot: Subjects.ProductsSrv
  subject: Subjects.ProductDeleted
  streamName: Streams.ProductsStream
  data: { id: string; version: number }
}
