import { FastifySchema } from 'fastify';
import z from 'zod';

export const loginSchemaBody = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export const loginSchemaResponse = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  userId: z.number(),
});

export const loginSchema: FastifySchema = {
  tags: ['Session'],
  description: 'Login a user',
  body: loginSchemaBody,
  response: { 
    200: loginSchemaResponse,
  },
};

export const logoutSchema: FastifySchema = {
  tags: ['Session'],
  description: 'Logout a user',
  security: [
    {
      bearerAuth: [],
    },
  ],
  response: {
    200: z.object({
      message: z.string(),
    }),
  },
};
