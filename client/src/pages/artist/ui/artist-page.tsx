"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { usersControllerGetProfile } from "@/shared/api/generated";
import { IUser } from "@/shared/types/user";

export const ArtistPage = () => {
  const params = useParams<{ id: string }>() || { id: "" };

  const { data } = useQuery<IUser>({
    queryFn: () => usersControllerGetProfile(params.id),
    queryKey: ["artist", params.id],
  });

  if (!data) {
    return <div>loading..</div>;
  }

  return <div>{data.name}</div>;
};
