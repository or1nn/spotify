"use client";
import { Card, CardBody } from "@heroui/card";
import { CirclePlus } from "lucide-react";
import React, { ReactNode } from "react";

import { useAppSelector } from "@/shared/lib/redux";

export const PlayerLayout = ({
  className,
  actions,
}: {
  className?: string;
  actions?: ReactNode;
}) => {
  const title = useAppSelector((state) => state.player.active?.title);

  const artists = useAppSelector((state) => state.player.active?.artists);
  const picture = useAppSelector((state) => state.player.active?.picture);

  return (
    <Card className={className}>
      <CardBody className="flex-row items-center gap-3">
        <img
          alt="Album cover"
          className="h-16 w-16 rounded-md"
          src={"http://localhost:5000/static/tracks/" + picture}
        />
        <div className="w-60">
          <div>{title}</div>
          <div className="text-slate-400">
            {artists?.map((artist) => artist.name)}
          </div>
        </div>
        <CirclePlus className="w-12 h-12" />
        {actions}
      </CardBody>
    </Card>
  );
};
