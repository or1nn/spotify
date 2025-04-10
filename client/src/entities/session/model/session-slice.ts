import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});
