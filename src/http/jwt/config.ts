export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret',
    expiresIn: '15m',
  },
  refreshToken: {
    expiresInDays: 7,
    expiresInString: '7d',
  }
};