import { CouponType } from './coupon-type'
import { DiscountType } from './discount-type'

export type CreateCouponInput = {
  id: string
  coupon: string
  type: CouponType
  discountType: DiscountType
  discountValue: number
  maxDiscountValue?: number
}
