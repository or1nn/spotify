import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { authControllerSignOut } from "@/shared/api/generated";
import { sessionSlice } from "@/entities/session/model/session.slice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logoutMutation = useMutation({
    mutationFn: authControllerSignOut,
    mutationKey: ["session"],
    onSuccess: () => {
      dispatch(sessionSlice.actions.logout());
    },
  });

  return { logout: logoutMutation.mutate };
};
