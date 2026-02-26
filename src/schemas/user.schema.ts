import { FastifySchema } from 'fastify';
import z from 'zod';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

export const listUserSchema: FastifySchema = {
  tags: ['Users'],
  description: 'List all users',
  response: {
    200: z.array(userSchema),
  },
};

export const createUserSchema: FastifySchema = {
  tags: ['Users'],
  description: 'Create a user',
  body: z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
  }),
  response: {
    201: userSchema,
  },
};

export const updateUserSchema: FastifySchema = {
  tags: ['Users'],
  description: 'Update a user',
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string().optional(),
    email: z.email().optional(),
    password: z.string().optional(),
  }),
  response: {
    200: userSchema,
  },
};
