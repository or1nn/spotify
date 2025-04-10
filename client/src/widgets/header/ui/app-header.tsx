import React from "react";

import { Layout } from "./layout";
import { Profile } from "./profile";
import { Logo } from "./logo";

export const AppHeader = () => {
  return <Layout actions={<Profile />} logo={<Logo />} />;
};
