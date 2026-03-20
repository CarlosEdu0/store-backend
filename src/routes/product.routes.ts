import { FastifyTypedInstance } from "@/@types/fastify";
import createProductController from "@/controllers/products/create.products";
import deleteProductController from "@/controllers/products/delete.products";
import listProductController from "@/controllers/products/list.products";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { listProductSchema, productCreateSchema, productDeleteSchema } from "@/schemas/products.schemas";

export async function productRoute(app: FastifyTypedInstance) {
    app.get(
        '/',
        {
            schema: listProductSchema,
            preHandler: verifyJwt,
        },
        listProductController,
    );

    app.post(
        '/',
        {
            schema: productCreateSchema,
            preHandler: verifyJwt,
        },
        createProductController,
    );

    app.delete(
        '/:id',
        {
            schema: productDeleteSchema,
            preHandler: verifyJwt,
        },
        deleteProductController,
    );
}