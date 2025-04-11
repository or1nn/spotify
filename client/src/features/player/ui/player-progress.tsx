"use client";
import { Slider } from "@heroui/slider";
import React from "react";

import { usePlayerProgress } from "../model/use-player-progress";

export const PlayerProgress = ({ audio }: { audio: HTMLAudioElement }) => {
  const { duration, onChangeCurrentTimeHandler, currentTime } =
    usePlayerProgress(audio);

  return (
    <Slider
      aria-label="Progress"
      endContent={<>{duration}</>}
      maxValue={duration}
      startContent={<>{currentTime}</>}
      value={currentTime}
      onChange={(val) => onChangeCurrentTimeHandler(val as number)}
    />
  );
};
