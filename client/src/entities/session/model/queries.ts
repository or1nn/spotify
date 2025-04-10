import { useQuery } from "@tanstack/react-query";

import { authControllerGetSessionInfo } from "@/shared/api/generated";

export const useSessionQuery = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: authControllerGetSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
};
