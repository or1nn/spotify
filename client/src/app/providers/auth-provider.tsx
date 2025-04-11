import React, { ReactNode } from "react";
import { Spinner } from "@heroui/react";

import { useSession } from "@/entities/session/model/use-session";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useSession();

  if (isLoading) {
    return <Spinner className="h-screen" size="lg" variant="wave"/>;
  }

  return <>{children}</>;
};
