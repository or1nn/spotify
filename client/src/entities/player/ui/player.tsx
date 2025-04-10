"use client";
import { Card, CardBody } from "@heroui/card";
import { Slider } from "@heroui/slider";
import { CirclePlus, Volume2 } from "lucide-react";
import React, { ReactNode, useState } from "react";
export const Player = ({
  className,
  actions,
}: {
  className?: string;
  actions?: ReactNode;
}) => {
  const [value, setValue] = useState(4);

  return (
    <Card className={className}>
      <CardBody className="flex-row items-center gap-3">
        <img
          alt="Album cover"
          className="h-16 w-16 rounded-md"
          src="https://heroui.com/images/album-cover.png"
        />
        <div className="w-60">
          <div>Твои слова</div>
          <div className="text-slate-400">Or1nn</div>
        </div>
        <CirclePlus className="w-12 h-12" />
        {actions}
        <Slider
          endContent={<>3:00</>}
          maxValue={180}
          startContent={<>{value}</>}
          value={value}
          onChange={setValue}
        />
        <Slider
          hideThumb
          aria-label="volume"
          className="w-60"
          color="foreground"
          maxValue={100}
          startContent={<Volume2 />}
        />
      </CardBody>
    </Card>
  );
};
