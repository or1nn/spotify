import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieService } from './cookie.service';
import { ConfigService } from '@nestjs/config';
import { GetSession } from './decorators/get-session.decorator';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private cookieService: CookieService,
    private configService: ConfigService,
  ) {}
  @ApiCreatedResponse()
  @Post('sign-up')
  async signUp(
    @Body() dto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      dto.email,
      dto.name,
      dto.password,
    );
    this.cookieService.setToken(res, accessToken);
  }
  @ApiOkResponse()
  @Post('sign-in')
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(
      dto.email,
      dto.password,
    );
    this.cookieService.setToken(res, accessToken);
  }
  @ApiOkResponse()
  @Post('sign-out')
  signOut(@Res() res: Response) {
    this.cookieService.removeToken(res);
  }
  @ApiOkResponse()
  @Get('verify')
  async verify(@Query('code') code: string, @Res() res: Response) {
    await this.authService.verify(code);
    return res.redirect(this.configService.get('CLIENT_URL') + '?verified');
  }
  @ApiOkResponse()
  @Auth()
  @Get('session')
  getSessionInfo(@GetSession() session) {
    return session;
  }
}
