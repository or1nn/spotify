import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

import { SignUpForm } from "@/features/auth";
import { routes } from "@/shared/constants/routes";

export const SignUpPage = () => {
  return (
    <div className="bg-gradient-to-b from-background to-black">
      <Card className="w-[500px] px-8 py-4 mx-auto mt-20">
        <CardHeader>
          <h2 className="font-bold text-2xl">Sign Up</h2>
        </CardHeader>
        <CardBody className="p-4">
          <SignUpForm />
          <Link
            className="text-center self-center mt-4"
            href={routes.SIGNIN}
            size="sm"
          >
            <span className="text-zinc-300 mr-1">Already have an account?</span>
            Log in here
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
