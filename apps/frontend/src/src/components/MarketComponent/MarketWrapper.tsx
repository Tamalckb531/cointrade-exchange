import React from "react";
import StatWrapper from "../StatWrapper";
import DataTable from "../TableComponent/DataTable";
import PaginationComp from "./PaginationComp";

const MarketWrapper = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white mt-80">
      <StatWrapper />
      <DataTable pageMarket={true} />
      <div className="my-5">
        <PaginationComp />
      </div>
    </div>
  );
};

export default MarketWrapper;
