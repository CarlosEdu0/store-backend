import { User } from '@/interfaces/user/user.interface';
import UserService from '@/services/user.service';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function createUserController(
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<User> {
  console.log(req.body);
  const user = req.body as User;
  const userService = new UserService();
  const data = await userService.create(user);

  return reply.status(201).send(data);
}
