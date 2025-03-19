import { SingUpForm } from "@/components/AuthComponent/SignUpFrom";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SingUpForm />
      </div>
    </div>
  );
};

export default page;
