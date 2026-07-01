import { UserType } from './user-type'

export type UpdateUserInput = {
  email?: string
  firstName?: string
  lastName?: string
  password?: string
  type?: UserType
  isActive?: boolean
  accessibleShops?: string[]
}
