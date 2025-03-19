import React from "react";
import StatWrapper from "../StatWrapper";
import DataTable from "../TableComponent/DataTable";

const MarketWrapper = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white mt-80">
      <StatWrapper />
      <DataTable pageMarket={true} />
    </div>
  );
};

export default MarketWrapper;
