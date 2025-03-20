import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const TradeHeader = () => {
  return (
    <div className="flex items-center flex-row w-full rounded-lg bg-[#14151B] p-4 overflow-auto">
      <div className="flex justify-between w-full gap-4">
        {/* Coin Button */}
        <button className="flex items-center rounded-xl bg-[#202127] p-2 hover:opacity-90">
          <div className="flex items-center mr-2">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  alt="SOL Logo"
                  src="https://cryptologos.cc/logos/solana-sol-logo.png?v=040"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <p className="font-medium text-white">
                SOL<span className="text-gray-400">/USDC</span>
              </p>
            </div>
          </div>
          <ChevronDown className="text-gray-400" />
        </button>

        {/* Stats Section */}
        <div className="flex items-center space-x-6 text-white">
          <div className="flex flex-col text-center">
            <p className="text-[#00C278] text-lg font-medium">133.60</p>
            <p className="text-sm font-normal">$133.60</p>
          </div>
          <div className="flex flex-col text-center text-nowrap">
            <p className="text-xs text-gray-400">24H Change</p>
            <span className="text-[#FD4B4E] text-sm font-normal">
              -9.05 -7.26%
            </span>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xs text-gray-400">24H High</p>
            <span className="text-sm font-normal">136.11</span>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xs text-gray-400">24H Low</p>
            <span className="text-sm font-normal">124.22</span>
          </div>
          <button className="text-blue-500 hover:opacity-80">
            <div className="flex flex-col text-center">
              <p className="text-xs text-gray-400">24H Volume (USDC)</p>
              <span className="text-sm font-normal">12,927,003.73</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
