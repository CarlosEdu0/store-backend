export interface User {
  id: number;
  name: string;
  email: string;
  role: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}



