"use client";
import { Button, Form, Input } from "@heroui/react";
import React from "react";

import { useSignUpForm } from "../model/use-sign-up-form";

export const SignUpForm = () => {
  const { submitHandler } = useSignUpForm();

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
        label="Name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter your name"
      />
      <Input
        isRequired
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Input
        isRequired
        label="Confirm password"
        labelPlacement="outside"
        name="confirmpassword"
        placeholder="Confirm password"
        type="password"
      />
      <Button fullWidth color="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};
