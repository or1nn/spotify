"use client";
import { Button } from "@heroui/button";
import { SkipBack, Play, SkipForward, Pause } from "lucide-react";
import React from "react";

export const TogglePlay = ({
  pause,
  onPlayHandler,
}: {
  pause: boolean;
  onPlayHandler: () => void;
}) => {
  return (
    <div className="flex gap-x-1 items-center">
      <Button isIconOnly className="p-1" radius="full" variant="light">
        <SkipBack className="w-10 h-10 fill-foreground " />
      </Button>
      <Button
        isIconOnly
        className="w-14 h-14"
        radius="full"
        variant="flat"
        onPress={onPlayHandler}
      >
        {pause ? (
          <Play className="w-12 h-12 p-2 fill-foreground text-foreground" />
        ) : (
          <Pause className="w-12 h-12 p-2  text-foreground" />
        )}
      </Button>
      <Button isIconOnly className="p-1" radius="full" variant="light">
        <SkipForward className="w-10 h-10 fill-foreground " />
      </Button>
    </div>
  );
};
