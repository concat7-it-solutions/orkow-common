import { Streams } from './streams'
import { Subjects } from './subjects'
import { CreateCouponInput } from './types/coupon-create-input'

type CouponUpdatedEventData = {
  id: string
  version: number
} & CreateCouponInput

type CouponActionEventData = { id: string; version: number; isActive: boolean }

export interface CouponUpdatedEvent {
  subjectRoot: Subjects.CouponSrv
  subject: Subjects.CouponUpdated
  streamName: Streams.CouponStream
  data: CouponUpdatedEventData | CouponActionEventData
}
