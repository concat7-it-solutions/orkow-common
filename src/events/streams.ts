import { Subjects } from './subjects'

export enum Stream {
  UsersStream = `EVENTS_${Subjects.UsersSrv}`,
  ConsumersStream = `EVENTS_${Subjects.ConsumersSrv}`,
  AuthStream = `EVENTS_${Subjects.AuthSrv}`,
}
