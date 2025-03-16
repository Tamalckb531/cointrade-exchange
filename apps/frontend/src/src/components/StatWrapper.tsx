import React from "react";
import StatCard from "./CardComponent/StatCard";
import StatCardMobile from "./CardComponent/StateCardMobile";

const StatWrapper = () => {
  return (
    <div className=" flex gap-2 items-center justify-center">
      <StatCard title="New" />
      <StatCard title="Top Gainer" />
      <StatCard title="Popular" />
      <StatCardMobile />
    </div>
  );
};

export default StatWrapper;
