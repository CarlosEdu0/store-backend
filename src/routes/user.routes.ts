import { FastifyTypedInstance } from '@/@types/fastify';
import { createUserController } from '@/controllers/users/create.users';
import { deleteUserController } from '@/controllers/users/delete.user';
import { listUserController } from '@/controllers/users/list.users';
import { updateUserController } from '@/controllers/users/update.user';
import { verifyJwt } from '@/http/middlewares/verify-jwt';
import { createUserSchema, deleteUserSchema, listUserSchema, updateUserSchema } from '@/schemas/user.schema';

export async function userRoute(app: FastifyTypedInstance) {
  app.get(
    '/',
    {
      schema: listUserSchema,
      preHandler: verifyJwt,
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
      preHandler: verifyJwt,
    },
    updateUserController,
  );

  app.delete(
    '/:id',
    {
      schema: deleteUserSchema,
      preHandler: verifyJwt,
    },
    deleteUserController,
  );
}
