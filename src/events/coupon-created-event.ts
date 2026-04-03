import { Streams } from './streams'
import { Subjects } from './subjects'
import { CreateCouponInput } from './types/coupon-create-input'

export interface CouponCreatedEvent {
  subjectRoot: Subjects.CouponSrv
  subject: Subjects.CouponCreated
  streamName: Streams.CouponStream
  data: CreateCouponInput
}
