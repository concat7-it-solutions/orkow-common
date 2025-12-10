export * from './utils/generateToken'
export * from './utils/getRequestId'
export * from './utils/getUserId'
export * from './utils/getUserType'
export * from './utils/hashPassword'

export const log = (str: any) => {
  console.log('Logger: ' + str)
}
