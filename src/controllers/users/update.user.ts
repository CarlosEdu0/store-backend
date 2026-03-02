import UserService from '@/services/user.service';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function updateUserController(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string };
  const data = req.body;

  const userService = new UserService();
  const updatedUser = await userService.update(Number(id), data);

  return reply.status(200).send(updatedUser);
}
