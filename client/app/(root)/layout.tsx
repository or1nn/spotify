import { Card, CardBody } from "@heroui/card";
import { ReactNode } from "react";

import { Player } from "@/entities/player/ui/player";
import { TogglePlay } from "@/features/player";
import { Sidebar } from "@/widgets/sidebar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-2 grid gap-2 grid-cols-[300px_1fr] grid-rows-[1fr_100px] ">
      <Sidebar />
      <Card className="p-1 gap-l-0">
        <CardBody>{children}</CardBody>
      </Card>
      <Player actions={<TogglePlay />} className="col-span-2 mb-2" />
    </div>
  );
}
