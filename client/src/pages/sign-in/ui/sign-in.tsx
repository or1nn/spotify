import { Card, CardHeader, CardBody } from "@heroui/card";
import React from "react";
import { Link } from "@heroui/link";

import { routes } from "@/shared/constants/routes";
import { SignInForm } from "@/features/auth";

export const SignIn = () => {
  return (
    <div className="bg-gradient-to-b from-background to-black">
      <Card className="w-[500px] px-8 py-4 mx-auto mt-20">
        <CardHeader>
          <h2 className="font-bold text-2xl">Sign In</h2>
        </CardHeader>
        <CardBody className="p-4">
          <SignInForm />
          <Link
            className="text-center self-center mt-4"
            href={routes.SIGNUP}
            size="sm"
          >
            <span className="text-zinc-300 mr-1">Don't have an account?</span>
            Sign up for Spotify
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
