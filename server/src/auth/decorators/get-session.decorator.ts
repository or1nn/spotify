import { createParamDecorator } from '@nestjs/common';
import { UserRole } from '@prisma/client';

type JwtPayload = {
  id: string;
  role: UserRole;
};

export const GetSession = createParamDecorator(
  (key: keyof JwtPayload, ctx): string | JwtPayload => {
    const user: JwtPayload = ctx.switchToHttp().getRequest().user;
    return key ? user[key] : user;
  },
);
