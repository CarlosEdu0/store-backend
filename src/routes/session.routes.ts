import { FastifyTypedInstance } from '@/@types/fastify';
import { loginUserController } from '@/controllers/sessions/create.sessions';
import { deleteSessionController } from '@/controllers/sessions/delete.sessions';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { loginSchema, logoutSchema } from '@/schemas/session.schema';

export async function sessionRoute(app: FastifyTypedInstance) {
  app.post(
    '/login',
    {
      schema: loginSchema,
    },
    loginUserController,
  );

  app.delete(
    '/logout',
    {
      schema: logoutSchema,
      preHandler: verifyJwt,
    },
    deleteSessionController,
  )
}
