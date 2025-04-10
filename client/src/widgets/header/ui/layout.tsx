import React, { ReactNode } from "react";

export const Layout = ({
  actions,
  logo,
}: {
  actions?: ReactNode;
  logo?: ReactNode;
}) => {
  return (
    <header className="h-20 px-4 flex items-center justify-between">
      {logo}
      {actions}
    </header>
  );
};
