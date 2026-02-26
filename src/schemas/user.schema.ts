import { FastifySchema } from 'fastify';
import z from 'zod';

export const createUserSchema: FastifySchema = {
    tags: ['users'],
    description: 'Create a user',
    body: z.object({
        name: z.string(),
        email: z.email(),
        password: z.string(),
    })
};

export const updateUserSchema: FastifySchema = {
    tags: ['users'],
    description: 'Update a user',
    params: z.object({
        id: z.string(),
    }),
    body: z.object({
        name: z.string().optional(),
        email: z.email().optional(),
        password: z.string().optional(),
    })
};

