import React from "react";
import { House, ListMusic, ListPlus, MicVocal, Music } from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { routes } from "@/shared/constants/routes";
export const Sidebar = () => {
  return (
    <Card className="p-1">
      <CardBody>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              className="flex gap-x-1"
              color="foreground"
              href={routes.HOME}
            >
              <House />
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-x-1"
              color="foreground"
              href={routes.COLLECTIONS}
            >
              <Music />
              Collections
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-x-1"
              color="foreground"
              href={routes.PLAYLISTS}
            >
              <ListMusic />
              Playlists
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-x-1"
              color="foreground"
              href={routes.ARTISTS}
            >
              <MicVocal />
              Artists
            </Link>
          </li>
          <li>
            <Link className="flex gap-x-1" color="foreground" href="#">
              <ListPlus />
              Create Playlist
            </Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};
