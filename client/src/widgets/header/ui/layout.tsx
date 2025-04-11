"use client";
import React, { ReactNode } from "react";

import { useAppSelector } from "@/shared/lib/redux";

export const Layout = ({
  actions,
  logo,
  profile,
}: {
  actions?: ReactNode;
  logo?: ReactNode;
  profile?: ReactNode;
}) => {
  const isAuth = useAppSelector((state) => state.session.isAuth);

  return (
    <header className="h-20 px-4 flex items-center justify-between">
      {logo}
      {isAuth ? profile : actions}
    </header>
  );
};
