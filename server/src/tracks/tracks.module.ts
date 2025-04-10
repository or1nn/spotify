import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [PrismaModule, FilesModule],
  controllers: [TracksController],
  providers: [TracksService],
})
export class TracksModule {}
