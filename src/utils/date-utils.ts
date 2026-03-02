import { authConfig } from '@/http/jwt/config';

export function getRefreshTokenExpiration(): Date {
  const date = new Date();
  date.setDate(date.getDate() + authConfig.refreshToken.expiresInDays);
  return date;
}