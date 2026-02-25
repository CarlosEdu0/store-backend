import { FastifySchema } from 'fastify';
import z from 'zod';

export const createUserSchema: FastifySchema = {
    tags: ['users'],
    description: 'Create a user',
    body: z.object({
        name: z.string(),
        email: z.email(),
    })
};
