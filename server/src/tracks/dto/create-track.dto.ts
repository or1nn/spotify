import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  @ApiProperty({ example: 'Track' })
  title: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  audio: any;

  @ApiProperty({ type: 'string', format: 'binary' })
  picture: any;
}
