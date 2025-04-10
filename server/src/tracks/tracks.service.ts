import { BadRequestException, Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TracksService {
  constructor(
    private prisma: PrismaService,
    private filesService: FilesService,
  ) {}
  getAll() {
    return this.prisma.track.findMany();
  }
  getByArtist(artistId: string) {
    return this.prisma.track.findMany({
      where: { artists: { some: { id: artistId } } },
    });
  }
  create(
    title: string,
    artistId: string,
    audio: Express.Multer.File,
    picture: Express.Multer.File,
  ) {
    const audioPath = this.filesService.upload(audio, 'audio');
    const picturePath = this.filesService.upload(picture, 'tracks');
    return this.prisma.track.create({
      data: {
        title,
        audio: audioPath,
        picture: picturePath,
        artists: { connect: { id: artistId } },
      },
    });
  }
  async update(
    trackId: string,
    userId: string,
    title?: string,
    audio?: Express.Multer.File,
    picture?: Express.Multer.File,
  ) {
    let audioPath: string | undefined = undefined,
      picturePath: string | undefined = undefined;
    if (audio) {
      audioPath = this.filesService.upload(audio, 'audio');
    }
    if (picture) {
      picturePath = this.filesService.upload(picture, 'tracks');
    }
    const track = await this.prisma.track.findFirst({
      where: { artists: { some: { id: userId } }, id: trackId },
    });
    if (!track) {
      throw new BadRequestException('Трек не найден');
    }
    return this.prisma.track.update({
      where: { artists: { some: { id: userId } }, id: trackId },
      data: {
        title,
        audio: audioPath,
        picture: picturePath,
      },
    });
  }
  async delete(trackId: string, userId: string) {
    const track = await this.prisma.track.findFirst({
      where: { id: trackId, artists: { some: { id: userId } } },
    });
    if (!track) {
      throw new BadRequestException('Трек не найден');
    }
    return this.prisma.track.delete({
      where: { id: trackId, artists: { some: { id: userId } } },
    });
  }
}
