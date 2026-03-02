import { UserCreate } from './create.inteface';
import { User } from './user.interface';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: UserCreate): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
}
