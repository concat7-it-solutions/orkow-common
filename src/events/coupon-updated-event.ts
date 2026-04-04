import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'
import { DiscountType } from './types/discount-type'

export interface CouponUpdatedEvent {
  subjectRoot: Subjects.CouponSrv
  subject: Subjects.CouponUpdated
  streamName: Streams.CouponStream
  data: {
    id: string
    version: number
    coupon?: string
    type?: CouponType
    discountType?: DiscountType
    discountValue?: number
    maxDiscountValue?: number
    minCartValue?: number
    isActive?: boolean
  }
}
