"use client";
import { Button } from "@heroui/button";
import React from "react";
import { useRouter } from "next/navigation";

import { routes } from "@/shared/constants/routes";

export const SignInButton = () => {
  const router = useRouter();

  return (
    <Button
      className="px-8 font-medium"
      color="primary"
      radius="full"
      onPress={() => router.push(routes.SIGNIN)}
    >
      Log In
    </Button>
  );
};
