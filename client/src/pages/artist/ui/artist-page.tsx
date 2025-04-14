"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { usersControllerGetProfile } from "@/shared/api/generated";
import { IUser } from "@/shared/types/user";
import { TrackCard, useTracksByArtistQuery } from "@/entities/track";

export const ArtistPage = () => {
  const params = useParams<{ id: string }>() || { id: "" };

  const { data } = useQuery<IUser>({
    queryFn: () => usersControllerGetProfile(params.id),
    queryKey: ["artist", params.id],
  });

  const { tracks } = useTracksByArtistQuery(params.id);

  if (!data || !tracks) {
    return <div>loading..</div>;
  }

  return (
    <div>
      <div className="flex items-end gap-x-4">
        <img
          className="rounded-full w-40 h-40"
          src={`http://localhost:5000/static/avatars/${data.avatarUrl}`}
        />
        <div>
          <div>Not verified</div>
          <h3 className="text-6xl font-bold mt-2">{data.name}</h3>
          <div className="mt-6">142.801 monthly listeners</div>
        </div>
      </div>
      <h3 className="text-2xl font-medium my-6">Popular</h3>
      {tracks.map((track, i) => (
        <TrackCard
          key={track.id}
          id={track.id}
          listens={track.listens}
          number={i+1}
          picture={track.picture}
          title={track.title}
        />
      ))}
    </div>
  );
};
