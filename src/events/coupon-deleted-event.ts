import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'

export interface CouponDeletedEvent {
  subjectRoot: Subjects.CouponsSrv
  subject: Subjects.CouponDeleted
  streamName: Streams.CouponsStream
  data: { id: string; version: number; type: CouponType }
}
