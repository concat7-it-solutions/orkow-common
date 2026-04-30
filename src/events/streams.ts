import { Subjects } from './subjects'

export enum Streams {
  UsersStream = `EVENTS_${Subjects.UsersSrv}`,
  ConsumersStream = `EVENTS_${Subjects.ConsumersSrv}`,
  AuthStream = `EVENTS_${Subjects.AuthSrv}`,
  ProfileStream = `EVENTS_${Subjects.ProfileSrv}`,
  CouponsStream = `EVENTS_${Subjects.CouponsSrv}`,
  EnrollsStream = `EVENTS_${Subjects.EnrollsSrv}`,
  ShopsStream = `EVENTS_${Subjects.ShopsSrv}`,
  ProductsStream = `EVENTS_${Subjects.ProductsSrv}`,
  OrdersStream = `EVENTS_${Subjects.OrdersSrv}`,
  PaymentsStream = `EVENTS_${Subjects.PaymentsSrv}`,
  ExpirationsStream = `EVENTS_${Subjects.ExpirationsSrv}`,
  ShippingsStream = `EVENTS_${Subjects.ShippingsSrv}`,
  ReviewsStream = `EVENTS_${Subjects.ReviewsSrv}`,
  NotificationsStream = `EVENTS_${Subjects.NotificationsSrv}`,
}
