import { UserType } from './user-type'

export type CreateUserInput = {
  authProvider: string
  authProviderId?: string | null
  email: string
  firstName: string
  lastName: string
  password?: string | null
  type: UserType
}
