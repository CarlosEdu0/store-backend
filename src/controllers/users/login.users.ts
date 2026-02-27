import {  loginSchemaBody } from "@/schemas/user.schema";
import UserService from "@/services/user.service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function loginUserController(
    req: FastifyRequest,
    reply: FastifyReply,
) {
    const { email, password } = loginSchemaBody.parse(req.body);
    if (!email || !password) {
        return reply.status(400).send({ message: "Email and password are required" });
    }

    const userService = new UserService();
    const data = await userService.login(email, password);

    if (!data) {
        return reply.status(401).send({ message: "Invalid email or password" });
    }
    
    const token = await reply.jwtSign(
        { email: data.email },
        { sub: String(data.id) }
    );
    
    const refreshToken = await reply.jwtSign(
        {},
        { 
          sub: String(data.id), 
          expiresIn: '7d' 
        }
    );

    return reply.status(200).send(data);
}