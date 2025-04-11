import { Slider } from "@heroui/slider";
import { Volume2 } from "lucide-react";
import React from "react";

import { useChangeVolume } from "../model/use-change-volume";

export const ChangeVolume = ({ audio }: { audio: HTMLAudioElement }) => {
  const { volume, onVolumeChangeHandler } = useChangeVolume(audio);

  return (
    <Slider
      hideThumb
      aria-label="volume"
      className="w-60"
      color="foreground"
      maxValue={100}
      startContent={<Volume2 />}
      value={volume}
      onChange={(val) => onVolumeChangeHandler(val as number)}
    />
  );
};
