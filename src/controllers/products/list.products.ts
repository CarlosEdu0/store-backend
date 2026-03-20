import { FastifyReply, FastifyRequest } from "fastify";

export default async function listProductController(
    req: FastifyRequest,
    reply: FastifyReply,
) {
    return reply.status(200).send();
}