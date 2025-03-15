import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <h1
      className="flex items-center justify-center cursor-pointer mr-3"
      onClick={() => router.push("/")}
    >
      <span className="lg:text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#d9d9d9] to-[#bfbfbf]">
        Cointrade
      </span>
      <div className="ml-auto flex items-center gap-4"></div>
    </h1>
  );
};

export default Logo;
