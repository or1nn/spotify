"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "../store";

import { HeroProvider } from "./hero-provider";

import { queryClient } from "@/shared/api/query-client";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HeroProvider themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </HeroProvider>
      </QueryClientProvider>
    </Provider>
  );
};
