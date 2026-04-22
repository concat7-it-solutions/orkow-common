import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'
import { DiscountType } from './types/discount-type'

export interface CouponUpdatedEvent {
  subjectRoot: Subjects.CouponsSrv
  subject: Subjects.CouponUpdated
  streamName: Streams.CouponsStream
  data: {
    id: string
    version: number
    coupon?: string
    maxUsage?: number
    type?: CouponType
    discountType?: DiscountType
    discountValue?: number
    maxDiscountValue?: number
    minCartValue?: number
    isActive?: boolean
    startDate?: string
    endDate?: string
    shopId?: string
  }
}
