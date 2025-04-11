import { useEffect } from "react";

import { useSessionQuery } from "./queries";
import { sessionSlice } from "./session.slice";

import { useAppDispatch } from "@/shared/lib/redux";

export const useSession = () => {
  const { data, isLoading } = useSessionQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(sessionSlice.actions.setSession(data));
    }
  }, [data]);

  return { data, isLoading };
};
