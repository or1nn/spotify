import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { routes } from "@/shared/constants/routes";
import { authControllerSignIn, SignInDto } from "@/shared/api/generated";

export const useSignInForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const signUpMutation = useMutation({
    mutationFn: authControllerSignIn,
    mutationKey: ["session"],
    onSuccess: () => {
      router.push(routes.HOME);
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
  });
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    signUpMutation.mutate(form as unknown as SignInDto);
  };

  return { submitHandler };
};
