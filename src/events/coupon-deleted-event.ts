import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'

export interface CouponDeletedEvent {
  subjectRoot: Subjects.CouponSrv
  subject: Subjects.CouponDeleted
  streamName: Streams.CouponStream
  data: { id: string; version: number; type: CouponType }
}
