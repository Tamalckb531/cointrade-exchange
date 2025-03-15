import React from "react";

const TopGradient = (text: string) => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 px-6 font-medium text-neutral-200">
      <span>{text}</span>
      <span className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );
};

export default TopGradient;
