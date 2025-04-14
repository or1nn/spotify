"use client";
import React from "react";
import clsx from "clsx";
import { AudioLines } from "lucide-react";

import { ITrack } from "@/shared/types/track";
import { useAppSelector } from "@/shared/lib/redux";

export const TrackCard = ({
  id,
  number,
  picture,
  title,
  listens,
  className,
}: ITrack & { className: string }) => {
  const playId = useAppSelector((state) => state.player?.active?.id);

  return (
    <div
      className={clsx(
        "grid grid-cols-[40px_80px_1fr_0.5fr_100px] items-center cursor-pointer hover:bg-zinc-700 px-5 py-2 rounded-md",
        className,
      )}
    >
      <div className="text-zinc-400">
        {playId === id ? <AudioLines className="text-primary" /> : number}{" "}
      </div>
      <img
        alt={title}
        className="rounded-md w-12 h-12"
        src={`http://localhost:5000/static/tracks/${picture}`}
      />
      <div>{title}</div>
      <div className="text-zinc-400">{listens}</div>
      <div className="text-zinc-400">2:39</div>
    </div>
  );
};
