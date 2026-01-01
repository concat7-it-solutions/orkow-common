import { UserType } from './user-type'

export type CreateUserInput = {
  authProvider: string
  authProviderId?: string
  email: string
  firstName: string
  lastName: string
  password?: string
  type: UserType
}
