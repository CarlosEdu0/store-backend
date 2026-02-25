import z from 'zod';
import { FastifyTypedInstance } from './@types/fastify';
import { userRoute } from './routes/user.route';

export async function routes(app: FastifyTypedInstance) {
  app.register(userRoute);
}
