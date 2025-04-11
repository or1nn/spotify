import { playerSlice } from "@/entities/player";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";

export const usePlayerProgress = (audio: HTMLAudioElement) => {
  const dispatch = useAppDispatch();
  const currentTime = useAppSelector((state) => state.player.currentTime);
  const duration = useAppSelector((state) => state.player.duration);
  const onChangeCurrentTimeHandler = (val: number) => {
    dispatch(playerSlice.actions.setCurrentTime(val as number));
    audio.currentTime = currentTime;
  };

  return { duration, onChangeCurrentTimeHandler, currentTime };
};
