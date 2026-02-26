import UserRepositoryPrisma from '@/repositories/user.repository';
import { User, UserCreate, UserRepository } from '../interfaces/user.interface';

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create(user: UserCreate): Promise<User> {
    return this.userRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export default UserService;
