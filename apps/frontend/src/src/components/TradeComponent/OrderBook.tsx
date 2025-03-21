"use client";
import React, { useEffect, useState } from "react";

const sellBids = [
  { price: "140.25", size: "520.50", total: "520.50" },
  { price: "139.85", size: "430.75", total: "951.25" },
  { price: "139.45", size: "410.60", total: "1361.85" },
  { price: "138.90", size: "380.40", total: "1742.25" },
  { price: "138.50", size: "350.30", total: "2092.55" },
  { price: "138.10", size: "320.80", total: "2413.35" },
  { price: "137.65", size: "290.70", total: "2704.05" },
  { price: "137.25", size: "275.60", total: "2979.65" },
  { price: "136.90", size: "260.45", total: "3240.10" },
  { price: "136.50", size: "245.30", total: "3485.40" },
  { price: "136.10", size: "230.10", total: "3715.50" },
  { price: "135.70", size: "215.20", total: "3930.70" },
  { price: "135.25", size: "200.90", total: "4131.60" },
  { price: "134.85", size: "185.75", total: "4317.35" },
  { price: "134.50", size: "170.60", total: "4487.95" },
  { price: "134.18", size: "155.50", total: "4643.45" },
  { price: "133.90", size: "140.40", total: "4783.85" },
  { price: "133.55", size: "125.30", total: "4909.15" },
  { price: "133.25", size: "110.25", total: "5019.40" },
  { price: "132.90", size: "95.10", total: "5114.50" },
];

const buyBids = [
  { price: "130.10", size: "100.50", total: "100.50" },
  { price: "130.45", size: "120.30", total: "220.80" },
  { price: "130.85", size: "135.70", total: "356.50" },
  { price: "131.20", size: "150.60", total: "507.10" },
  { price: "131.55", size: "165.40", total: "672.50" },
  { price: "131.90", size: "180.25", total: "852.75" },
  { price: "132.10", size: "195.80", total: "1048.55" },
  { price: "132.45", size: "210.90", total: "1259.45" },
  { price: "132.75", size: "225.40", total: "1484.85" },
  { price: "133.00", size: "240.75", total: "1725.60" },
  { price: "133.35", size: "255.10", total: "1980.70" },
  { price: "133.65", size: "270.20", total: "2250.90" },
  { price: "134.00", size: "285.30", total: "2536.20" },
  { price: "134.25", size: "300.75", total: "2836.95" },
  { price: "134.60", size: "315.40", total: "3152.35" },
  { price: "134.90", size: "330.20", total: "3482.55" },
  { price: "135.30", size: "345.50", total: "3828.05" },
  { price: "135.55", size: "360.90", total: "4188.95" },
  { price: "135.85", size: "375.40", total: "4564.35" },
  { price: "136.20", size: "390.80", total: "4955.15" },
];

const OrderBook = () => {
  return (
    <div className="flex flex-col w-1/3 min-w-[260px] max-w-[300px] overflow-hidden rounded-lg bg-[#14151B]">
      <div className="flex flex-col h-full">
        {/* Book and Trade  */}
        <div className=" p-4">
          <div className="items-center justify-start flex-row flex space-x-2">
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-white px-3 bg-[#1F2026]">
              Book
            </div>
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-slate-400 px-3">
              Trades
            </div>
          </div>
        </div>
        {/* stats  */}
        <div className=" flex flex-col grow overflow-y-hidden">
          <div className="flex flex-col h-full grow overflow-x-hidden">
            {/* labels */}
            <div className="flex flex-row min-w-0 gap-1 px-3 py-2">
              <div className="flex justify-between flex-row w-2/3 min-w-0 gap-1">
                <p className="font-medium text-white truncate text-xs">
                  Price (USDC)
                </p>
                <button
                  type="button"
                  className="font-medium transition-opacity hover:opacity-80 hover:cursor-pointer h-auto truncate text-right text-xs text-slate-400"
                  data-rac=""
                  id="react-aria3157649049-:ru3:"
                >
                  Size (SOL)
                </button>
              </div>
              <button
                type="button"
                className="font-medium transition-opacity hover:opacity-80 hover:cursor-pointer h-auto w-1/3 truncate text-right text-xs text-slate-400"
              >
                Total (SOL)
              </button>
            </div>

            {/* data  */}
            <div
              className="flex flex-col h-full flex-1 overflow-y-auto font-sans"
              style={{ scrollbarWidth: "none", msOverflowStyle: "scrollbar" }}
            >
              {/* sell  */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-end h-full w-full flex-col-reverse">
                  {sellBids.map((bid, index) => (
                    <BidBar
                      key={index}
                      price={bid.price}
                      size={bid.size}
                      total={bid.total}
                      bidColor="#FD4B4E"
                    />
                  ))}
                </div>
              </div>
              {/* current price  */}
              <div className="flex flex-col flex-0 z-10 snap-center px-3 py-1 sticky bottom-0">
                <div className="flex justify-between flex-row">
                  <div className="flex items-center flex-row gap-1.5">
                    <button type="button" className="hover:opacity-90">
                      <p className="font-medium tabular-nums text-[#FD4B4E]">
                        128.22
                      </p>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="font-medium hover:opacity-80 hover:cursor-pointer text-blue-500 text-xs transition-opacity pointer-events-none opacity-0 duration-200"
                  >
                    Recenter
                  </button>
                </div>
              </div>
              {/* buy  */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-end h-full w-full flex-col-reverse">
                  {buyBids.map((bid, index) => (
                    <BidBar
                      key={index}
                      price={bid.price}
                      size={bid.size}
                      total={bid.total}
                      bidColor="#00C278"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* total percentage */}
            <DynamicBar greenPercentage="57" redPercentage="43" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;

interface bid {
  price: string;
  size: string;
  total: string;
  bidColor: string;
}

function BidBar({ price, size, total, bidColor }: bid) {
  const [barWidth1, setBarWidth1] = useState(44.6); // Initial width %
  const [barWidth2, setBarWidth2] = useState(29.7); // Initial width %

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setBarWidth1((prev) =>
        Math.max(10, Math.min(80, prev + (Math.random() - 0.5) * 10))
      );
      setBarWidth2((prev) =>
        Math.max(5, Math.min(50, prev + (Math.random() - 0.5) * 10))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[25px] items-center">
      <button type="button" className="h-full w-full">
        <div className="relative flex h-full w-full items-center overflow-hidden border-t border-dashed border-transparent hover:border-slate-300/50 px-3">
          {/* Animated Red Shadow Bars */}
          <div
            className={`absolute top-[1px] bottom-[1px] right-[12px] transition-all duration-500 ease-in-out`}
            style={{ width: `${barWidth1}%`, backgroundColor: bidColor + "33" }}
          />
          <div
            className={`absolute top-[1px] bottom-[1px] right-[12px] transition-all duration-500 ease-in-out`}
            style={{ width: `${barWidth2}%`, backgroundColor: bidColor + "66" }}
          />

          {/* Price */}
          <div className="flex h-full w-[30%] items-center">
            <p
              className={`z-10 text-left text-xs font-normal tabular-nums`}
              style={{ color: bidColor }}
            >
              {price}
            </p>
          </div>

          {/* Size */}
          <div className="flex h-full w-[35%] items-center justify-end">
            <p className="z-10 text-right text-xs font-normal tabular-nums text-gray-300">
              {size}
            </p>
          </div>

          {/* Total */}
          <div className="flex h-full w-[35%] items-center justify-end">
            <p className="z-10 pr-2 text-right text-xs font-normal tabular-nums text-gray-300">
              {total}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

interface percentage {
  greenPercentage: string;
  redPercentage: string;
}

const DynamicBar = ({ greenPercentage, redPercentage }: percentage) => {
  const redper: number = Number(redPercentage) + 10;
  return (
    <div className="relative mx-3 my-1 h-[20px] overflow-hidden ">
      {/* Green & Red Percentage Labels */}
      <div className="flex justify-between">
        <p className="z-10 py-1 pl-2 text-xs font-bold text-[#00C278]">
          {greenPercentage}%
        </p>
        <p className="z-10 py-1 pr-2 text-xs font-bold text-[#FD4B4E]">
          {redPercentage}%
        </p>
      </div>

      {/* Green and Red Bars with Skew Effect */}
      <div className="absolute inset-0 flex">
        {/* Green bar  */}
        <div
          className="relative"
          style={{
            width: `${greenPercentage}%`,
            backgroundColor: "#013927" + "33",
            clipPath: "polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
            transition: "width 0.3s ease-in-out",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#00C278" + "33", // Main green color
              width: "100%",
            }}
          ></div>
        </div>
        {/* <div className=" w-[0.05rem]"></div> */}
        {/* Red bar  */}
        <div
          className="relative "
          style={{
            width: `${redper}%`,
            backgroundColor: "#4D1E24" + "33",
            clipPath: "polygon(16px 0, 100% 0, 100% 100%, calc(0% + 8px) 100%)",

            transition: "width 0.3s ease-in-out",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#FD4B4E" + "33", // Main red color
              width: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
