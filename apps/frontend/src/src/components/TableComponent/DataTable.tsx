"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import SearchBox from "../HeaderComponent/SearchBox";

interface dataTable {
  pageMarket: boolean;
}

const data = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 15 },
  { day: "Wed", value: 8 },
  { day: "Thu", value: 12 },
  { day: "Fri", value: 18 },
  { day: "Sat", value: 14 },
  { day: "Sun", value: 16 },
];
//? test
const coinData = [
  {
    name: "BTC-PERP",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
    price: "$43,210",
    openInterest: "$1.5B",
    volume: "$22.4B",
    change: 3.25,
    chartColor: "#00c278",
    data: [
      { day: "Mon", value: 30 },
      { day: "Tue", value: 25 },
      { day: "Wed", value: 40 },
      { day: "Thu", value: 35 },
      { day: "Fri", value: 45 },
      { day: "Sat", value: 38 },
      { day: "Sun", value: 50 },
    ],
  },
  {
    name: "ETH-PERP",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
    price: "$3,210",
    openInterest: "$980M",
    volume: "$18.6B",
    change: -2.12,
    chartColor: "#ff4d4d",
    data: [
      { day: "Mon", value: 20 },
      { day: "Tue", value: 18 },
      { day: "Wed", value: 28 },
      { day: "Thu", value: 25 },
      { day: "Fri", value: 30 },
      { day: "Sat", value: 22 },
      { day: "Sun", value: 35 },
    ],
  },
  {
    name: "USDT-PERP",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
    price: "$1.00",
    openInterest: "$400M",
    volume: "$9.4B",
    change: 0.1,
    chartColor: "#00c278",
    data: [
      { day: "Mon", value: 10 },
      { day: "Tue", value: 9 },
      { day: "Wed", value: 12 },
      { day: "Thu", value: 11 },
      { day: "Fri", value: 13 },
      { day: "Sat", value: 8 },
      { day: "Sun", value: 10 },
    ],
  },
  {
    name: "SOL-PERP",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
    price: "$128.55",
    openInterest: "$2M",
    volume: "$14.6M",
    change: -4.57,
    chartColor: "#ff4d4d",
    data: [
      { day: "Mon", value: 10 },
      { day: "Tue", value: 5 },
      { day: "Wed", value: 12 },
      { day: "Thu", value: 7 },
      { day: "Fri", value: 15 },
      { day: "Sat", value: 3 },
      { day: "Sun", value: 8 },
    ],
  },
  {
    name: "SHIBA-PERP",
    logo: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=040",
    price: "$0.000032",
    openInterest: "$100M",
    volume: "$5.6B",
    change: 1.75,
    chartColor: "#00c278",
    data: [
      { day: "Mon", value: 5 },
      { day: "Tue", value: 8 },
      { day: "Wed", value: 3 },
      { day: "Thu", value: 12 },
      { day: "Fri", value: 7 },
      { day: "Sat", value: 10 },
      { day: "Sun", value: 4 },
    ],
  },
  {
    name: "DOGE-PERP",
    logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=040",
    price: "$0.082",
    openInterest: "$150M",
    volume: "$7.2B",
    change: -3.42,
    chartColor: "#ff4d4d",
    data: [
      { day: "Mon", value: 15 },
      { day: "Tue", value: 10 },
      { day: "Wed", value: 18 },
      { day: "Thu", value: 8 },
      { day: "Fri", value: 22 },
      { day: "Sat", value: 6 },
      { day: "Sun", value: 14 },
    ],
  },
  {
    name: "TON-PERP",
    logo: "https://cryptologos.cc/logos/toncoin-ton-logo.png?v=040",
    price: "$2.31",
    openInterest: "$120M",
    volume: "$3.8B",
    change: 4.05,
    chartColor: "#00c278",
    data: [
      { day: "Mon", value: 7 },
      { day: "Tue", value: 4 },
      { day: "Wed", value: 10 },
      { day: "Thu", value: 3 },
      { day: "Fri", value: 12 },
      { day: "Sat", value: 6 },
      { day: "Sun", value: 8 },
    ],
  },
  {
    name: "XRP-PERP",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=040",
    price: "$0.72",
    openInterest: "$200M",
    volume: "$6.5B",
    change: -1.12,
    chartColor: "#ff4d4d",
    data: [
      { day: "Mon", value: 11 },
      { day: "Tue", value: 6 },
      { day: "Wed", value: 13 },
      { day: "Thu", value: 9 },
      { day: "Fri", value: 16 },
      { day: "Sat", value: 5 },
      { day: "Sun", value: 10 },
    ],
  },
  {
    name: "TRX-PERP",
    logo: "https://cryptologos.cc/logos/tron-trx-logo.png?v=040",
    price: "$0.11",
    openInterest: "$80M",
    volume: "$2.7B",
    change: 0.85,
    chartColor: "#00c278",
    data: [
      { day: "Mon", value: 6 },
      { day: "Tue", value: 3 },
      { day: "Wed", value: 9 },
      { day: "Thu", value: 4 },
      { day: "Fri", value: 11 },
      { day: "Sat", value: 7 },
      { day: "Sun", value: 5 },
    ],
  },
  {
    name: "SUI-PERP",
    logo: "https://cryptologos.cc/logos/sui-sui-logo.png?v=040",
    price: "$1.50",
    openInterest: "$50M",
    volume: "$1.5B",
    change: -2.45,
    chartColor: "#ff4d4d",
    data: [
      { day: "Mon", value: 9 },
      { day: "Tue", value: 5 },
      { day: "Wed", value: 14 },
      { day: "Thu", value: 8 },
      { day: "Fri", value: 17 },
      { day: "Sat", value: 4 },
      { day: "Sun", value: 12 },
    ],
  },
];

const DataTable = ({ pageMarket }: dataTable) => {
  return (
    <div className=" w-full max-w-[1160px] overflow-x-auto">
      <div className="flex flex-col min-w-[1160px] gap-3 rounded-xl bg-[#14151B] p-4 text-white">
        {/*//? Tab  */}
        <div className="flex justify-between">
          <div className="items-center justify-center flex-row flex space-x-2">
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-[#9695AF] px-3">
              Spot
            </div>
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-[#9695AF] px-3 bg-[#202127]">
              Futures
            </div>
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-[#9695AF] px-3">
              Lending
            </div>
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-sm font-medium outline-none hover:opacity-90 h-[32px] text-[#9695AF] px-3">
              Favorites
            </div>
          </div>
          <SearchBox pageMarket={pageMarket} />
        </div>
        {/* //? Table  */}
        <div className="overflow-x-auto">
          <table className=" w-full">
            <thead>
              <tr>
                <th className="border-b border-[#202127] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-start text-left">
                    Name
                  </div>
                </th>
                <th className="border-b border-[#202127] w-[17%] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-end text-right">
                    Price
                  </div>
                </th>
                <th className="border-b border-[#202127] w-[17%] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-end text-right">
                    Open Interest
                  </div>
                </th>
                <th className="border-b border-[#202127] w-[17%] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-end text-right">
                    24h Volume
                  </div>
                </th>
                <th className="border-b border-[#202127] w-[17%] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-end text-right">
                    24h Change
                  </div>
                </th>
                <th className="border-b border-[#202127] w-[17%] px-1 py-3 text-sm font-normal text-[#9695AF]  first:pl-2 last:pr-6">
                  <div className="flex flex-row items-center px-1 first:pl-0 cursor-pointer select-none justify-end text-right">
                    <ArrowDown size={18} />
                    <span className=" ml-2">Last 7 Days</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="gap-2 divide-y divide-[#202127]">
              {coinData.map((coin, index) => (
                <tr className="hover:bg-[#202127] cursor-pointer" key={index}>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7">
                    <div className="flex items-center">
                      <div
                        className="relative flex-none overflow-hidden rounded-full border border-gray-300"
                        style={{ width: 40, height: 40 }}
                      >
                        <Image
                          src={coin.logo}
                          alt="SOL Logo"
                          width={40}
                          height={40}
                          priority
                        />
                      </div>
                      <div className="ml-2 flex flex-col">
                        <span className="font-medium text-base">
                          {coin.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7 text-right">
                    <p className="text-base font-medium">{coin.price}</p>
                  </td>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7 text-right">
                    <p className="text-base font-medium">{coin.openInterest}</p>
                  </td>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7 text-right">
                    <p className="text-base font-medium">{coin.volume}</p>
                  </td>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7 text-right">
                    <p
                      className={`text-base font-medium  ${coin.change >= 0 ? " text-[#00C278]" : " text-[#FD4B4E]"}`}
                    >
                      {coin.change}
                    </p>
                  </td>
                  <td className="text-sm tabular-nums px-2 py-3 last:pr-7 text-right flex justify-end">
                    <div className="flex justify-end w-[100px] h-[20px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={coin.data}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke={coin.chartColor}
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
