export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface UserCreate {
  name: string;
  email: string;
  password: string;
}

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: UserCreate): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<void>;
}
