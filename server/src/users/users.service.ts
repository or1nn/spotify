import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private filesService: FilesService,
  ) {}

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }
  async findById(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }
  async getProfile(userId: string) {
    return this.prisma.user.findFirst({
      where: { id: userId },
      select: { avatarUrl: true, name: true, isVerified: true, country: true },
    });
  }

  async create(email: string, name: string, password: string) {
    return this.prisma.user.create({
      data: { email, name, password, avatarUrl: 'test.png' },
    });
  }

  async update(
    id: string,
    userId: string,
    body: UpdateUserDto,
    file: Express.Multer.File,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('У вас нет прав на это');
    }
    if (body.email) {
      const candidate = await this.findByEmail(body.email);
      if (candidate) {
        throw new BadRequestException('E-Mail занят');
      }
    }
    if (file) {
      const avatarUrl = this.filesService.upload(file, 'avatars');
      return await this.prisma.user.update({
        where: { id },
        data: {
          description: body.description,
          country: body.country,
          name: body.name,
          avatarUrl,
        },
      });
    }
    return await this.prisma.user.update({
      where: { id },
      data: {
        description: body.description,
        country: body.country,
        name: body.name,
      },
    });
  }
}
