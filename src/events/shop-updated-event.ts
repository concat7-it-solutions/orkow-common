import { Streams } from './streams'
import { Subjects } from './subjects'

export interface ShopUpdatedEvent {
  subjectRoot: Subjects.ShopsSrv
  subject: Subjects.ShopUpdated
  streamName: Streams.ShopsStream
  data: {
    id: string
    version: number
    name?: string
    currency?: string
    ownerId?: string
    domain?: string
    subdomain?: string
    isActive?: boolean
    status?: string
    verified?: boolean
  }
}
