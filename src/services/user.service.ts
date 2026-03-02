import { UserCreate } from '@/interfaces/user/create.inteface';
import { UserRepository } from '@/interfaces/user/repository.interface';
import { User } from '@/interfaces/user/user.interface';
import UserRepositoryPrisma from '@/repositories/user.repository';
import bcrypt from 'bcrypt';

class UserService {
  update(id: any, body: unknown) {
    throw new Error('Method not implemented.');
  }
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create(user: UserCreate): Promise<User> {
    const emailExists = await this.findByEmail(user.email);
    if (emailExists) {
      throw new Error('Email already exists');
    }

    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;
    return this.userRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async delete(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}

export default UserService;
