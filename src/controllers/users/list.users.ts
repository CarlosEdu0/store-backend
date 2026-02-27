import { User } from '@/interfaces/user.interface';
import UserService from '@/services/user.service';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function listUserController(
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<User[]> {
  const userService = new UserService();
  const data = await userService.findAll();
  return reply.status(200).send(data);
}
