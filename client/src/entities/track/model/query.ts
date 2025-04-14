import { useQuery } from "@tanstack/react-query";

import { tracksControllerGetByArtist } from "@/shared/api/generated";
import { ITrack } from "@/shared/types/track";

export const useTracksByArtistQuery = (id: string) => {
  const { data, isLoading } = useQuery<ITrack[]>({
    queryFn: () => tracksControllerGetByArtist(id),
    queryKey: ["tracks", id],
  });

  return { tracks: data, isLoading };
};
