import { IAlbum } from "./album";
import { IUser } from "./user";

export interface ITrack {
  id: string;
  artists: IUser[];
  title: string;
  listens: number;
  audio: string;
  picture: string;
  album: IAlbum;
}
