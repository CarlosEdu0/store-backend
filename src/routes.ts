import z from 'zod';
import { FastifyTypedInstance } from './@types/fastify';
import { userRoute } from './routes/user.routes';
import { sessionRoute } from './routes/session.routes';

export async function routes(app: FastifyTypedInstance) {
  app.register(userRoute, { prefix: '/users' });

  app.register(sessionRoute, { prefix: '/sessions' });
}
