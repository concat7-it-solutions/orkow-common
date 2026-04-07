import { Subjects } from './subjects'

export enum Streams {
  UsersStream = `EVENTS_${Subjects.UsersSrv}`,
  ConsumersStream = `EVENTS_${Subjects.ConsumersSrv}`,
  AuthStream = `EVENTS_${Subjects.AuthSrv}`,
  CouponsStream = `EVENTS_${Subjects.CouponsSrv}`,
  EnrollsStream = `EVENTS_${Subjects.EnrollsSrv}`,
  ShopsStream = `EVENTS_${Subjects.ShopsSrv}`,
  ProductsStream = `EVENTS_${Subjects.ProductsSrv}`,
  PaymentsStream = `EVENTS_${Subjects.PaymentsSrv}`,
  ExpirationsStream = `EVENTS_${Subjects.ExpirationsSrv}`,
}
