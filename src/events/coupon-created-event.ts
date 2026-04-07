import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'
import { DiscountType } from './types/discount-type'

export interface CouponCreatedEvent {
  subjectRoot: Subjects.CouponsSrv
  subject: Subjects.CouponCreated
  streamName: Streams.CouponsStream
  data: {
    id: string
    coupon: string
    type: CouponType
    discountType: DiscountType
    discountValue: number
    maxDiscountValue?: number
    minCartValue?: number
  }
}
