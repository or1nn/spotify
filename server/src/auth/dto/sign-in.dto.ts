import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'test@gmail.com' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: '123123' })
  @IsString()
  @Length(6, 20)
  password: string;
}
