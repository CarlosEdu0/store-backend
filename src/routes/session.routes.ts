import { FastifyTypedInstance } from '@/@types/fastify';
import { loginUserController } from '@/controllers/sessions/create.sessions';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { loginSchema } from '@/schemas/session.schema';

export async function sessionRoute(app: FastifyTypedInstance) {
  app.post(
    '/login',
    {
      schema: loginSchema,
    },
    loginUserController,
  );
}
