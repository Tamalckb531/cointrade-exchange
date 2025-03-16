import HeroSection from "@/components/HeroSection";
import StatWrapper from "@/components/StatWrapper";

export default function Home() {
  return (
    <div className=" text-4xl flex flex-col gap-5">
      <HeroSection />
      <StatWrapper />
    </div>
  );
}
