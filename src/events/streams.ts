import { Subjects } from './subjects'

export enum Streams {
  UsersStream = `EVENTS_${Subjects.UsersSrv}`,
  ConsumersStream = `EVENTS_${Subjects.ConsumersSrv}`,
  AuthStream = `EVENTS_${Subjects.AuthSrv}`,
  EnrollsStream = `EVENTS_${Subjects.EnrollsSrv}`,
  PaymentsStream = `EVENTS_${Subjects.PaymentsSrv}`,
  ExpirationsStream = `EVENTS_${Subjects.ExpirationsSrv}`,
}
