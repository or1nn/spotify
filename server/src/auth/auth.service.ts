import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { MailerService } from 'src/mailer/mailer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService,
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}
  async signUp(email: string, name: string, password: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Пользователь уже существует');
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await this.usersService.create(email, name, hashPassword);
    const { code } = await this.generateCode(user.id);
    //  await this.mailerService.sendEmail(
    //    user.email,
    //    'Spotify / Подтверждение аккаунта',
    // `<div><h1>Ваш код подтверждения: ${code}</h1><p>Для подтверждения перейдите по <a href="${this.configService.get('API_URL')}/auth/verify?code=${code}">ссылке</a></p></div>`,
    // );
    return this.generateToken(user);
  }

  async signIn(email: string, password: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (!existingUser) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }
    if (!bcrypt.compareSync(password, existingUser.password)) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }
    return this.generateToken(existingUser);
  }
  private generateToken(user: User) {
    const accessToken = this.jwtService.sign({
      id: user.id,
      role: user.role,
    });
    return { accessToken };
  }
  private async generateCode(userId: string) {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return this.prisma.verifyCode.create({ data: { userId, code } });
  }
  async verify(code: string) {
    const existingCode = await this.prisma.verifyCode.findFirst({
      where: { code },
    });
    if (!existingCode) {
      throw new BadRequestException('Неправильный код подтверждения');
    }
    await this.prisma.user.update({
      where: { id: existingCode.userId },
      data: { isVerified: new Date() },
    });
    await this.prisma.verifyCode.delete({
      where: { id: existingCode.id },
    });
  }
}
