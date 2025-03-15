import React from "react";
interface button {
  text: string;
}

const TopGradient = ({ text }: button) => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-slate-300 px-6 font-medium text-black hover:bg-red-100 transition duration-500 ease-in-out">
      <span className=" text-lg">{text}</span>
      <span className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );
};

export default TopGradient;
