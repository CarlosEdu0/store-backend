import SessionService from '@/services/session.service';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function deleteSessionController(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: string };
  const sessionService = new SessionService();
  const data = await sessionService.delete(Number(id));
  return reply.status(200).send(data);
}
