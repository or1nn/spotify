"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { Clock } from "lucide-react";

import { tracksControllerGetFavorites } from "@/shared/api/generated";
import { useAppDispatch } from "@/shared/lib/redux";
import { playerSlice } from "@/entities/player";
import { ITrack } from "@/shared/types/track";

export const columns = [
  { name: "#", uid: "id" },
  { name: "Title", uid: "title", sortable: true },
  { name: "Album", uid: "album", sortable: true },
  { name: "Date Added", uid: "date", sortable: true },
  { name: <Clock className="w-5 h-5" />, uid: "duration" },
];

export const CollectionsPage = () => {
  const { data } = useQuery({
    queryKey: ["favorites"],
    queryFn: tracksControllerGetFavorites,
  });
  const dispatch = useAppDispatch();
  const renderCell = useCallback((track: ITrack, columnKey: keyof ITrack) => {
    const cellValue = track[columnKey];

    switch (columnKey) {
      case "id":
        return 1;
      case "title":
        return (
          <div className="grid grid-rows-2 grid-cols-[60px_1fr]">
            <img
              alt="track"
              className="row-span-3 w-10 h-10 rounded-md"
              src={`http://localhost:5000/static/tracks/${track.picture}`}
            />
            <div>{track.title}</div>
            <div className="text-zinc-400">
              {track.artists.map((artist) => artist.name)}
            </div>
          </div>
        );
      case "album":
        return (
          <span className="text-zinc-400">
            {track.album?.title || track.title}
          </span>
        );
      case "date":
        return <span className="text-zinc-400">2 days ago</span>;
      default:
        return cellValue;
    }
  }, []);

  if (!data) {
    return "";
  }

  const onClickTrackHandler = (item: ITrack) => {
    dispatch(playerSlice.actions.setActive(item));
    dispatch(playerSlice.actions.playTrack());
  };

  return (
    <div>
      <h1>Collections</h1>
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="not found" items={data}>
          {(item: ITrack) => (
            <TableRow
              key={item.id}
              className="cursor-pointer"
              onClick={() => onClickTrackHandler(item)}
            >
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
