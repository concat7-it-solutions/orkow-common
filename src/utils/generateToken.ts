import jwt from 'jsonwebtoken'

export const generateToken = (userId: string, userType: string) => {
  return jwt.sign({ userId, userType }, process.env.JWT_SECRET || '', {
    expiresIn: '30 days',
  })
}
