import { User, UserCreate, UserRepository } from '@/interfaces/user.interface';
import { prisma } from '@/lib/prisma';

class UserRepositoryPrisma implements UserRepository {
  async findAll(): Promise<User[]> {
    const data = await prisma.user.findMany();
    return data;
  }
  async findById(id: number): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return data;
  }
  async findByEmail(email: string): Promise<User | null> {
    const data = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return data;
  }
  async create(user: UserCreate): Promise<User> {
    const data = await prisma.user.create({
      data: user,
    });

    return data;
  }
  async update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default UserRepositoryPrisma;
