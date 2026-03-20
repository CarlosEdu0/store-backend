import { FastifyReply, FastifyRequest } from "fastify";

export default async function createProductController(
    req: FastifyRequest,
    reply: FastifyReply,
) {
    return reply.status(201).send();
}