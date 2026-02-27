import { FastifySchema } from 'fastify';
import z from 'zod';
import be from 'zod/v4/locales/be.js';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  role: z.number(),
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

export const userCreateSchemaBody = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export const createUserSchema: FastifySchema = {
  tags: ['Users'],
  description: 'Create a user',
  body: userCreateSchemaBody,
  response: {
    201: userSchema,
  },
};

export const updateUserSchemaBody = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  role: z.number().optional(),
  password: z.string().optional(),
});

export const updateUserSchema: FastifySchema = {
  tags: ['Users'],
  description: 'Update a user',
  security: [{bearerAuth: []}],
  params: z.object({
    id: z.string(),
  }),
  body: updateUserSchemaBody,
  response: {
    200: userSchema,
  },
};

export const loginSchemaBody = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const loginSchema: FastifySchema = {
  tags: ['Users'],
  description: 'Login a user',
  body: loginSchemaBody,
  response: {
    200: z.object({
      token: z.string(),
    }),
  },
};
