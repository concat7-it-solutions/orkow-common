import { Streams } from './streams'
import { Subjects } from './subjects'

export interface AddressUpdatedEvent {
  subjectRoot: Subjects.ProfileSrv
  subject: Subjects.AddressUpdated
  streamName: Streams.ProfileStream
  data: {
    id: string
    version: number
    uid: string
    fullName: string
    mobileNumber: string
    city: string
    address: string
    division: string
    area?: string
    areaCode?: string
    country?: string
    zipCode?: string
  }
}
