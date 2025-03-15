import React from "react";
import TopGradient from "./AnimatedButtons/TopGradient";
import { HeroScrollDemo } from "./HeroScrollImage";

const HeroSection = () => {
  return (
    <main className="overflow-hidden text-slate-300">
      <div className="relative py-24 lg:py-28">
        <div className=" flex flex-col">
          <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5 -mb-44 z-50">
            <h1 className="mt-8 text-2xl font-semibold lg:text-6xl md:text-5xl">
              A Step Towards Freedom
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-wrap text-sm md:text-lg">
              Trade smarter, invest faster. Real-time insights, seamless
              execution, and powerful analytics—all in one place.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <TopGradient text="Trade Now" />
            </div>
          </div>
          <HeroScrollDemo />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
