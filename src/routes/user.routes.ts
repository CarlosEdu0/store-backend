import { FastifyTypedInstance } from '@/@types/fastify';
import { createUserController } from '@/controllers/users/create.users';
import { listUserController } from '@/controllers/users/list.users';
import { loginUserController } from '@/controllers/users/login.users';
import { updateUserController } from '@/controllers/users/update.user';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { createUserSchema, listUserSchema, loginSchema, updateUserSchema } from '@/schemas/user.schema';

export async function userRoute(app: FastifyTypedInstance) {
  app.get(
    '/',
    {
      schema: listUserSchema,
    },
    listUserController,
  );

  app.post(
    '/',
    {
      schema: createUserSchema,
    },
    createUserController,
  );

  app.put(
    '/:id',
    {
      schema: updateUserSchema,
      preHandler: verifyJwt
    },
    updateUserController
  );

  app.post(
    '/login',
    {
      schema: loginSchema,
    },
    loginUserController
  );
}
