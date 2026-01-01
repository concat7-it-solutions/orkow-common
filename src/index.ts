export * from './utils/generateToken'
export * from './utils/getRequestId'
export * from './utils/getUserId'
export * from './utils/getUserType'
export * from './utils/hashPassword'

export * from './nats-wrapper'
export * from './events/base-listener'
export * from './events/base-publisher'
export * from './events/subjects'
export * from './events/streams'

export * from './events/user-created-event'

export * from './events/types/user-type'
export * from './events/types/user-create-input'

export const log = (str: any) => {
  console.log('logger: ' + str)
}
