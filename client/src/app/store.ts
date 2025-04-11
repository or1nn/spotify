import { configureStore } from "@reduxjs/toolkit";

import { sessionSlice } from "@/entities/session/model/session.slice";
import { playerSlice } from "@/entities/player/model/player.slice";

export const store = configureStore({
  reducer: {
    [sessionSlice.reducerPath]: sessionSlice.reducer,
    [playerSlice.reducerPath]: playerSlice.reducer,
  },
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
