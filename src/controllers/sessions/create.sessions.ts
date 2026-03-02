import { loginSchemaBody } from '@/schemas/session.schema';
import SessionService from '@/services/session.service';
import UserService from '@/services/user.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import bcrypt from 'bcrypt';
import { authConfig } from '@/http/jwt/config';
import { SessionCreateResponse } from '@/interfaces/session/create.interface';

export async function loginUserController(
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<SessionCreateResponse> {
  const { email, password } = loginSchemaBody.parse(req.body);
  if (!email || !password) {
    return reply.status(400).send({ message: 'Email and password are required' });
  }

  const userService = new UserService();
  const user = await userService.findByEmail(email);

  if (!user || bcrypt.compareSync(password, user.password) === false) {
    return reply.status(401).send({ message: 'Invalid email or password' });
  }

  const accessToken = await reply.jwtSign(
    { email: user.email },
    {
      sub: String(user.id),
      expiresIn: authConfig.jwt.expiresIn,
    },
  );

  const refreshToken = await reply.jwtSign(
    {},
    {
      sub: String(user.id),
      expiresIn: authConfig.refreshToken.expiresInString,
    },
  );

  await new SessionService().create(user.id, refreshToken);

  const data: SessionCreateResponse = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userId: user.id,
  };

  return reply.status(200).send(data);
}
