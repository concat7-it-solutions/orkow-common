export enum Subjects {
  // User
  UsersSrv = 'users',
  UserCreated = 'user.created',
  UserUpdated = 'user.updated',
  UserDeleted = 'user.deleted',

  // Consumer
  ConsumersSrv = 'consumers',
  ConsumerCreated = 'consumer.created',
  ConsumerUpdated = 'consumer.updated',
  ConsumerDeleted = 'consumer.deleted',

  // Auth
  AuthSrv = 'auth',

  // Expiration
  ExpirationsSrv = 'expirations',
  ExpirationCreated = 'expiration.created',
  ExpirationUpdated = 'expiration.updated',
  ExpirationDeleted = 'expiration.deleted',

  // Payment
  PaymentsSrv = 'payments',
  PaymentCreated = 'payment.created',
  PaymentUpdated = 'payment.updated',
  PaymentDeleted = 'payment.deleted',
}
