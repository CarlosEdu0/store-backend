import { FastifySchema } from "fastify";
import z from "zod";

export const productSchema = z.object({
    id: z.number(),
    name: z.string(),
    picture: z.string(),
    categoryId : z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
});

export const listProductSchema: FastifySchema = {
    tags: ['Product'],
    description: 'List all products',
    security: [
        {
            bearerAuth: [],
        },
    ],
    response: {
        200: z.array(productSchema),
    },
}

export const productCreateSchemaBody = z.object({
    name: z.string(),
    picture: z.string(),
    categoryId: z.number(),
    description: z.string().nullable(),
});

export const productUpdateSchemaBody = z.object({
    name: z.string().nullable(),
    picture: z.string().nullable(),
});

export const productCreateSchema: FastifySchema = {
    tags: ['Product'],
    description: 'Create a product',
    security: [
        {
            bearerAuth: [],
        },
    ],
    body: productCreateSchemaBody,
    response: {
        201: productSchema,
    },
}

export const productUpdateSchema: FastifySchema = {
    tags: ['Product'],
    description: 'Update a product',
    security: [
        {
            bearerAuth: [],
        },
    ],
    body: productUpdateSchemaBody,
    response: {
        200: productSchema,
    },
}

export const productDeleteSchema: FastifySchema = {
    tags: ['Product'],
    description: 'Delete a product',
    security: [
        {
            bearerAuth: [],
        },
    ],
    params: z.object({
        id: z.number(),
    }),
    response: {
        200: z.boolean(),
    },
}