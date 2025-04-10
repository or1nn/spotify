import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateTrackDto {
  @ApiProperty({ example: 'Track' })
  @IsString()
  title: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  audio: any;

  @ApiProperty({ type: 'string', format: 'binary' })
  picture: any;
}
