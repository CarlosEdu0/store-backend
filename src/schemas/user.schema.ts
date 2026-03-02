import { FastifySchema } from 'fastify';
import z from 'zod';

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
  tags: ['User'],
  description: 'List all users',
  security: [
    {
      bearerAuth: [],
    },
  ],
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
  tags: ['User'],
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
  tags: ['User'],
  description: 'Update a user',
  security: [
    {
      bearerAuth: [],
    },
  ],
  params: z.object({
    id: z.string(),
  }),
  body: updateUserSchemaBody,
  response: {
    200: userSchema,
  },
};

export const deleteUserSchema: FastifySchema = {
  tags: ['User'],
  description: 'Delete a user',
  security: [
    {
      bearerAuth: [],
    },
  ],
  params: z.object({
    id: z.string(),
  }),
  response: {
    204: z.null(),
  },
};
