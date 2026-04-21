export * from './utils/generateToken'
export * from './utils/getRequestId'
export * from './utils/getUserId'
export * from './utils/getUserType'
export * from './utils/hashPassword'

export * from './errors/custom-error'
export * from './errors/bad-request-error'
export * from './errors/not-authorized-error'
export * from './errors/not-found-error'

export * from './events/base-listener'
export * from './events/base-publisher'
export * from './events/subjects'
export * from './events/streams'

// @types
export * from './events/types/coupon-type'
export * from './events/types/discount-type'

// User Events
export * from './events/user-created-event'
export * from './events/user-updated-event'
export * from './events/user-deleted-event'

// Consumer Events
export * from './events/consumer-created-event'
export * from './events/consumer-updated-event'
export * from './events/consumer-deleted-event'

// Coupon Events
export * from './events/coupon-created-event'
export * from './events/coupon-updated-event'
export * from './events/coupon-deleted-event'

// Enroll Events
export * from './events/package-created-event'
export * from './events/package-updated-event'
export * from './events/package-deleted-event'
export * from './events/enroll-created-event'
export * from './events/enroll-updated-event'
export * from './events/enroll-deleted-event'

// Billing Events
export * from './events/billing-created-event'
export * from './events/billing-updated-event'
export * from './events/billing-deleted-event'

// Shop Events
export * from './events/shop-created-event'
export * from './events/shop-updated-event'
export * from './events/shop-deleted-event'

// Product Events
export * from './events/product-created-event'
export * from './events/product-updated-event'
export * from './events/product-deleted-event'

// Order Events
export * from './events/history-created-event'

// Notification Events
export * from './events/notification-created-event'

export const log = (str: any) => {
  console.log('logger: ' + str)
}

export const print = (obj: any) => {
  return JSON.stringify(obj)
}
