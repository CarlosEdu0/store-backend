import { FastifyTypedInstance } from '@/@types/fastify';
import { createUserSchema, updateUserSchema } from '@/schemas/user.schema';
import z from 'zod';

export async function userRoute(app: FastifyTypedInstance) {
  app.get(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'Get all users',
      },
    },
    async (req, reply) => {
      return { hello: 'world' };
    },
  );

  app.post(
    '/users',
    {
      schema: createUserSchema,
    },
    async (req, reply) => {},
  );

  app.put(
    "/users/:id",
    {
      schema: updateUserSchema,
    },
    async (req, reply) => {
      return { hello: "world" };
    }
  )
}
