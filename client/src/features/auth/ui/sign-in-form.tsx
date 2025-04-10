"use client";
import { Button, Form, Input } from "@heroui/react";
import React from "react";

import { useSignInForm } from "../model/use-sign-in-form";

export const SignInForm = () => {
  const { submitHandler } = useSignInForm();

  return (
    <Form className="gap-y-4" onSubmit={submitHandler}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        isRequired
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button fullWidth color="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};
