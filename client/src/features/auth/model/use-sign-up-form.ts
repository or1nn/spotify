import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { routes } from "@/shared/constants/routes";
import { authControllerSignUp, SignUpDto } from "@/shared/api/generated";

export const useSignUpForm = () => {
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      router.push(routes.HOME);
    },
  });
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    signUpMutation.mutate(form as unknown as SignUpDto);
  };

  return { submitHandler };
};
