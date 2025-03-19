import HeroSection from "@/components/HeroSection";
import StatWrapper from "@/components/StatWrapper";
import DataTable from "@/components/TableComponent/DataTable";

export default function Home() {
  return (
    <div className=" text-4xl flex flex-col gap-5">
      <HeroSection />
      <div className=" flex flex-col items-center justify-center ">
        <StatWrapper />
        <DataTable pageMarket={false} />
      </div>
    </div>
  );
}
