import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateTrackDto } from './dto/create-track.dto';
import { GetSession } from 'src/auth/decorators/get-session.decorator';
import { ApiBody, ApiConsumes, ApiOkResponse } from '@nestjs/swagger';
import { UpdateTrackDto } from './dto/update-track.dto';
@Auth()
@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}
  @ApiOkResponse()
  @Get()
  getAll() {
    return this.tracksService.getAll();
  }
  @ApiOkResponse()
  @Get('by-artist/:id')
  getByArtist(@Param('id') artistId: string) {
    return this.tracksService.getByArtist(artistId);
  }
  @Get('favorites') getFavorites(@GetSession('id') userId: string) {
    return this.tracksService.getFavorites(userId);
  }
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload track data',
    type: CreateTrackDto,
  })
  @Post()
  create(
    @UploadedFiles()
    files: { picture?: Express.Multer.File[]; audio?: Express.Multer.File[] },
    @Body('title') title: string,
    @GetSession('id') userId: string,
  ) {
    if (!files.picture || !files.audio) {
      throw new BadRequestException('Загрузите изображение и аудио-файл');
    }
    return this.tracksService.create(
      title,
      userId,
      files.audio[0],
      files.picture[0],
    );
  }
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload track data',
    type: UpdateTrackDto,
  })
  @Patch('/:id')
  update(
    @Param('id') trackId: string,
    @GetSession('id') userId: string,
    @Body('title') title: string,
    @UploadedFiles()
    files: { picture?: Express.Multer.File; audio?: Express.Multer.File },
  ) {
    return this.tracksService.update(
      trackId,
      userId,
      title,
      files.audio,
      files.picture,
    );
  }
  @Delete('/:id')
  delete(@Param('id') trackId: string, @GetSession('id') userId: string) {
    return this.tracksService.delete(trackId, userId);
  }
}
