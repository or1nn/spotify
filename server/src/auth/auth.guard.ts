import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.cookies[CookieService.ACCESS_TOKEN];
    if (!token) {
      throw new UnauthorizedException('Вы не авторизованы');
    }
    try {
      const sessionInfo = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      req['user'] = sessionInfo;
    } catch (error) {
      throw new UnauthorizedException(`Вы не авторизованы, ${error}`);
    }

    return true;
  }
}
