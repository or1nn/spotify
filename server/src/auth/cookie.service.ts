import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  static ACCESS_TOKEN = 'access-token';
  setToken(res: Response, token: string) {
    res.cookie(CookieService.ACCESS_TOKEN, token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
  }
  removeToken(res: Response) {
    res.clearCookie(CookieService.ACCESS_TOKEN, { httpOnly: true });
    return 'cookie was cleared';
  }
}
