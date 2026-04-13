import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShopCreatedEvent {
  subjectRoot: Subjects.ShopsSrv
  subject: Subjects.ShopCreated
  streamName: Streams.ShopsStream
  data: {
    id: string
    name: string
    currency: string
    ownerId: string
  }
}
