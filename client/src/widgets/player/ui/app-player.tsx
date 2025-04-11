"use client";
import React, { useEffect } from "react";

import { TogglePlay } from "@/features/player";
import { ChangeVolume } from "@/features/player/ui/change-volume";
import { PlayerProgress } from "@/features/player/ui/player-progress";
import { PlayerLayout } from "@/entities/player/ui/player-layout";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { playerSlice } from "@/entities/player";

let audio: HTMLAudioElement;

export const AppPlayer = () => {
  const active = useAppSelector((state) => state.player.active?.audio);
  const volume = useAppSelector((state) => state.player.volume);

  const setAudio = () => {
    if (active) {
      audio.src = "http://localhost:5000/static/audio/" + active;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(playerSlice.actions.setDuration(Math.floor(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(
          playerSlice.actions.setCurrentTime(Math.floor(audio.currentTime)),
        );
      };
    }
  };
  const play = () => {
    if (pause) {
      dispatch(playerSlice.actions.playTrack());
      audio.play();
    } else {
      dispatch(playerSlice.actions.pauseTrack());
      audio.pause();
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      audio.play();
    }
  }, [active]);
  const pause = useAppSelector((state) => state.player.pause);
  const dispatch = useAppDispatch();


  return (
    <PlayerLayout
      actions={
        <>
          <TogglePlay pause={pause} onPlayHandler={play} />
          <PlayerProgress audio={audio} />
          <ChangeVolume audio={audio} />
        </>
      }
      className="col-span-2 mb-2"
    />
  );
};
