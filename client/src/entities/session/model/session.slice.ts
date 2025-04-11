import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISession {
  id: string;
  name: string;
  role: "ADMIN" | "USER";
  avatarUrl: string;
}

interface SessionState {
  isAuth: boolean;
  session: ISession | null;
}

const initialState: SessionState = {
  isAuth: false,
  session: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<ISession>) {
      state.isAuth = true;
      state.session = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.session = null;
    },
  },
});
