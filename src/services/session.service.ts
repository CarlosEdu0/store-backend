import { SessionCreate, SessionRepository } from '@/interfaces/session/repository.interface';
import { Session } from '@/interfaces/session/session.interface';
import SessionRepositoryPrisma from '@/repositories/session.repository';
import { getRefreshTokenExpiration } from '@/utils/functions/date-utils';
class SessionService {
  private sessionRepository: SessionRepository;
  constructor() {
    this.sessionRepository = new SessionRepositoryPrisma();
  }

  async findAll(): Promise<Session[]> {
    return this.sessionRepository.findAll();
  }

  async findById(id: number): Promise<Session | null> {
    return this.sessionRepository.findById(id);
  }

  async create(userId: number, refreshToken: string): Promise<Session> {
    const session: SessionCreate = {
      userId: userId,
      refreshToken: refreshToken,
      expiresAt: getRefreshTokenExpiration(),
    };

    return this.sessionRepository.create(session);
  }

  async delete(id: number): Promise<boolean> {
    return this.sessionRepository.delete(id);
  }

  async update(session: Session): Promise<Session> {
    return this.sessionRepository.update(session);
  }
}

export default SessionService;
