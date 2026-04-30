import { Streams } from './streams'
import { Subjects } from './subjects'

export interface AddressCreatedEvent {
  subjectRoot: Subjects.ProfileSrv
  subject: Subjects.AddressCreated
  streamName: Streams.ProfileStream
  data: {
    id: string
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
