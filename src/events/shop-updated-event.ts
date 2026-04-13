import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShopUpdatedEvent {
  subjectRoot: Subjects.ShopsSrv
  subject: Subjects.ShopUpdated
  streamName: Streams.ShopsStream
  data: {
    id: string
    name: string
    currency: string
    ownerId: string
    isActive?: boolean
    status?: string
    version: number
  }
}
