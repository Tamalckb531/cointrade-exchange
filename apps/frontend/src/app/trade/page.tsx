import BalanceTable from "@/components/TableComponent/ BalanceTable";
import BuySell from "@/components/TradeComponent/BuySell";
import OrderBook from "@/components/TradeComponent/OrderBook";
import TradeHeader from "@/components/TradeComponent/TradeHeader";
import TradeTableBar from "@/components/TradeComponent/TradeTableBar";
import TradeView from "@/components/TradeComponent/TradeView";
import React from "react";

const page = () => {
  return (
    <div className="text-white flex flex-col gap-2">
      {/* TradeHeader - Horizontally scrollable on smaller screens */}
      <div className="overflow-x-auto">
        <TradeHeader />
      </div>

      {/* Main Trading Section */}
      <div className="flex flex-col lg:flex-row gap-2">
        {/* TradeView - Full width in Tab/Mobile */}
        <div className="w-full">
          <TradeView />
        </div>

        {/* OrderBook & BuySell - Side by side in Tab, Row-wise in PC */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-2 w-full">
          <div className="w-full sm:w-1/2 lg:w-auto">
            <OrderBook />
          </div>
          <div className="w-full sm:w-1/2 lg:w-auto">
            <BuySell />
          </div>
        </div>
      </div>

      {/* TradeTableBar & BalanceTable - Fixed width & Scrollable */}
      <div className="overflow-x-auto">
        <div className="flex flex-col min-w-[600px] lg:min-w-[calc(100%-300px)]">
          <TradeTableBar />
          <BalanceTable />
        </div>
      </div>
    </div>
  );
};

export default page;
