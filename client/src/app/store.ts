import { configureStore } from "@reduxjs/toolkit";

import { sessionSlice } from "@/entities/session/model/session-slice";

export const store = configureStore({
  reducer: { [sessionSlice.reducerPath]: sessionSlice.reducer },
});

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
