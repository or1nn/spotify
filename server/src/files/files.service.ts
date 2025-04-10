import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as path from 'path';
import * as fs from 'fs';
@Injectable()
export class FilesService {
  upload(
    file: Express.Multer.File,
    folder: 'avatars' | 'audio' | 'tracks' | 'playlists' | 'albums',
  ) {
    const fileName = randomUUID() + '.' + file.originalname.split('.').pop();
    const filePath = path.resolve(__dirname, '..', '..', 'static', folder);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    fs.writeFileSync(path.join(filePath, fileName), file.buffer);
    return fileName;
  }
}
