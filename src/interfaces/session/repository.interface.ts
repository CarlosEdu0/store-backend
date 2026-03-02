import { SessionCreate } from './create.interface';
import { Session } from './session.interface';

export interface SessionRepository {
  findAll(): Promise<Session[]>;
  findById(id: number): Promise<Session | null>;
  findByToken(refreshToken: string): Promise<Session | null>;
  create(session: SessionCreate): Promise<Session>;
  delete(id: number): Promise<boolean>;
  update(session: Session): Promise<Session>;
}
export { SessionCreate };

