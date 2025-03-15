import React from "react";

interface Button {
  text: string;
  textColor: string;
}

const Shimmer = ({ text, textColor }: Button) => {
  return (
    <>
      <button
        className={`inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium ${textColor} transition-colors animate-[shimmer_2s_linear_infinite]`}
      >
        {text}
      </button>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>
    </>
  );
};

export default Shimmer;
