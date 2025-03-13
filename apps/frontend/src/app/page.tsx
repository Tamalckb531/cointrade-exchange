import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bold } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { ThreeDCardDemo } from "@/components/Card";

export default function Home() {
  return (
    <div className=" text-4xl flex flex-col gap-5">
      <p className="">Hi there </p>
      <Button className="p-10 w-25 h-10 rounded-full">Hello </Button>
      <Badge className="p-5">Hi</Badge>
      <Input type="email" placeholder="Email" />
      <Toggle aria-label="Toggle italic">
        <Bold className="h-4 w-4" />
      </Toggle>
      <ThreeDCardDemo />
    </div>
  );
}
