import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetSession } from 'src/auth/decorators/get-session.decorator';

@Auth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Patch('/:id')
  update(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UpdateUserDto,
    @Param('id') userId: string,
    @GetSession('id') id: string,
  ) {
    return this.usersService.update(id, userId, body, file);
  }
  @Get('/get-profile/:id')
  getProfile(@Param('id') userId: string) {
    return this.usersService.getProfile(userId);
  }
}
