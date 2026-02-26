import { User } from '@/interfaces/user.interface';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function listUserController(
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<User[]> {
  return reply.status(200).send();
}
