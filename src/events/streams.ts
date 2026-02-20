import { Subjects } from './subjects'

export enum Streams {
  UsersStream = `EVENTS_${Subjects.UsersSrv}`,
  ConsumersStream = `EVENTS_${Subjects.ConsumersSrv}`,
  AuthStream = `EVENTS_${Subjects.AuthSrv}`,
  PaymentsStream = `EVENTS_${Subjects.PaymentsSrv}`,
}
