import z from 'zod';
import { FastifyTypedInstance } from './@types/fastify';
import { userRoute } from './routes/user.routes';

export async function routes(app: FastifyTypedInstance) {
  app.register(userRoute, { prefix: '/users' });
}
