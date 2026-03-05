import { UserRole } from '@/utils/enums/userRole.enum';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
