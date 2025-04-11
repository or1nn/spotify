import { Card, CardBody } from "@heroui/card";
import { ReactNode } from "react";

import { Sidebar } from "@/widgets/sidebar";
import { AppPlayer } from "@/widgets/player";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-2 grid gap-2 grid-cols-[300px_1fr] grid-rows-[1fr_100px] ">
      <Sidebar />
      <Card className="p-1 gap-l-0">
        <CardBody>{children}</CardBody>
      </Card>
      <AppPlayer />
    </div>
  );
}
