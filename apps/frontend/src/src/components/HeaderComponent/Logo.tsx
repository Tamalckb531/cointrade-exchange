import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <h1
      className="flex items-center justify-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#94e204] via-[#ee9d24] to-[#f50404]">
        Cointrade
      </span>
      <div className="ml-auto flex items-center gap-4"></div>
    </h1>
  );
};

export default Logo;
