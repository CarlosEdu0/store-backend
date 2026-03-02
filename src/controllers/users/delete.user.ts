import UserService from "@/services/user.service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function deleteUserController(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };
    const userService = new UserService();
    const data = await userService.delete(Number(id));
    return reply.status(200).send(data);
}