import { FastifyTypedInstance } from '@/@types/fastify';
import { createUserController } from '@/controllers/users/create.users';
import { listUserController } from '@/controllers/users/list.users';
import { createUserSchema, listUserSchema, updateUserSchema } from '@/schemas/user.schema';

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
    },
    async (req, reply) => {
      return { hello: 'world' };
    },
  );
}
