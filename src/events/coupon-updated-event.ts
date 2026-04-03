import { Streams } from './streams'
import { Subjects } from './subjects'
import { CouponType } from './types/coupon-type'
import { DiscountType } from './types/discount-type'

export type CouponUpdatedEventData = {
  id: string
  version: number
  coupon: string
  type: CouponType
  discountType: DiscountType
  discountValue: number
  maxDiscountValue?: number
}

export type CouponActionEventData = {
  id: string
  version: number
  isActive: boolean
}

export interface CouponUpdatedEvent {
  subjectRoot: Subjects.CouponSrv
  subject: Subjects.CouponUpdated
  streamName: Streams.CouponStream
  data: CouponUpdatedEventData | CouponActionEventData
}
