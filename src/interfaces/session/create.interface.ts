export interface SessionCreate {
  userId: number;
  refreshToken: string;
  expiresAt: Date;
}

export interface SessionCreateResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
}
