import { useDispatch } from "react-redux";

import { playerSlice } from "@/entities/player";
import { useAppSelector } from "@/shared/lib/redux";

export const useChangeVolume = (audio: HTMLAudioElement) => {
  const dispatch = useDispatch();
  const volume = useAppSelector((state) => state.player.volume);
  const onVolumeChangeHandler = (val: number) => {
    audio.volume = val / 100;
    dispatch(playerSlice.actions.setVolume(val));
  };

  return { volume, onVolumeChangeHandler };
};
