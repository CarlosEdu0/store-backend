import { FastifyTypedInstance } from '@/@types/fastify';
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
    async () => {
      return { hello: 'world' };
    },
  );

  app.post(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'Create a user',
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
      },
    },
    async () => {},
  );
}
