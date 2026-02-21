export * from './utils/generateToken'
export * from './utils/getRequestId'
export * from './utils/getUserId'
export * from './utils/getUserType'
export * from './utils/hashPassword'

export * from './events/base-listener'
export * from './events/base-publisher'
export * from './events/subjects'
export * from './events/streams'

// Events
export * from './events/user-created-event'
export * from './events/user-updated-event'
export * from './events/user-deleted-event'

export const log = (str: any) => {
  console.log('logger: ' + str)
}

export const print = (obj: any) => {
  return JSON.stringify(obj)
}
