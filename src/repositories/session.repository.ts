import {
  Session,
  SessionCreate,
  SessionRepository,
} from '@/interfaces/session/repository.interface';
import { prisma } from '@/lib/prisma';

class SessionRepositoryPrisma implements SessionRepository {
  async findAll(): Promise<Session[]> {
    return prisma.session.findMany();
  }
  async findById(id: number): Promise<Session | null> {
    return prisma.session.findUnique({
      where: {
        id: id,
      },
    });
  }
  async findByToken(refreshToken: string) {
    return prisma.session.findFirst({
      where: {
        refreshToken,
        deletedAt: null,
      },
    });
  }
  async create(session: SessionCreate): Promise<Session> {
    return prisma.session.create({
      data: session,
    });
  }
  async delete(id: number): Promise<boolean> {
    const data = await prisma.session.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    return data.deletedAt !== null;
  }
  async update(session: Session): Promise<Session> {
    return prisma.session.update({
      where: {
        id: session.id,
      },
      data: session,
    });
  }
}

export default SessionRepositoryPrisma;
