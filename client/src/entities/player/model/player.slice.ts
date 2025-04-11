import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITrack } from "@/shared/types/track";
interface playerState {
  active: null | ITrack;
  pause: boolean;
  volume: number;
  duration: number;
  currentTime: number;
}
const initialState: playerState = {
  active: null,
  volume: 50,
  pause: true,
  duration: 0,
  currentTime: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack(state) {
      state.pause = false;
    },
    pauseTrack(state) {
      state.pause = true;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setActive(state, action: PayloadAction<ITrack>) {
      state.active = action.payload;
    },
  },
});
