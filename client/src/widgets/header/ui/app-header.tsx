import React from "react";

import { Layout } from "./layout";
import { Profile } from "./profile";
import { Logo } from "./logo";

import { SignInButton } from "@/features/auth";

export const AppHeader = () => {
  return (
    <Layout actions={<SignInButton />} logo={<Logo />} profile={<Profile />} />
  );
};
