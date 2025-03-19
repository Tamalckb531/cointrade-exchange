"use client";
import { cn } from "../../lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export function SingUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className=" bg-[#09090B] text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl">SignUp</CardTitle>
          <CardDescription>
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className=" flex items-center justify-between gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Selmon"
                    className="bg-[#09090B] dark:bg-[#09090B] text-white focus:ring-0 focus:outline-none border border-gray-700"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="bai"
                    className="bg-[#09090B] dark:bg-[#09090B] text-white focus:ring-0 focus:outline-none border border-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="bg-[#09090B] dark:bg-[#09090B] text-white focus:ring-0 focus:outline-none border border-gray-700"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="bg-[#09090B] dark:bg-[#09090B] text-white focus:ring-0 focus:outline-none border border-gray-700"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="cPassword">Confirm Password</Label>
                </div>
                <Input
                  id="cPassword"
                  type="password"
                  className="bg-[#09090B] dark:bg-[#09090B] text-white focus:ring-0 focus:outline-none border border-gray-700"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:text-white cursor-pointer"
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="w-full bg-[#09090B] dark:bg-[#09090B] text-white border border-gray-700 hover:bg-white hover:dark:bg-white hover:text-black cursor-pointer"
              >
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <span
                className="underline underline-offset-4 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Login
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
