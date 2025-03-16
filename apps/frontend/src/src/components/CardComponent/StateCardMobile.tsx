import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const tradingPairs = [
  {
    name: "Bitcoin",
    price: "$0.1886",
    change: "+34.43 %",
    img: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040",
    link: "/trade/ROAM_USDC",
    changeColor: "text-[#00c278]",
  },
  {
    name: "Ethereum",
    price: "$0.4503",
    change: "-4.56 %",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040",
    link: "/trade/MOVE_USDC",
    changeColor: "text-[#FD4B4E]",
  },
  {
    name: "Solana",
    price: "$130",
    change: "+5.5%",
    img: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=040",
    link: "/trade/ANIME_USDC",
    changeColor: "text-[#00C278]",
  },
  {
    name: "Dogecoin",
    price: "$2.56",
    change: "-6.9%",
    img: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=040",
    link: "/trade/J_USDC",
    changeColor: "text-[#FD4B4E]",
  },
  {
    name: "Tether",
    price: "$0.673",
    change: "-3.44 %",
    img: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040",
    link: "/trade/MELANIA_USDC",
    changeColor: "text-[#FD4B4E]",
  },
];

interface stat {
  title: string;
}

const StatCardMobile = () => {
  return (
    <Card className="block lg:hidden rounded-lg bg-[#14151B] text-white  text-base w-[380px] py-3 -mt-80 cursor-pointer z-50 border-none">
      <CardHeader className=" flex items-center gap-5">
        <CardTitle className="font-medium text-md mb-1 p-2 bg-[#202127] rounded-lg">
          New
        </CardTitle>
        <CardTitle className="font-medium text-md mb-1 p-2 hover:bg-[#202127b6] rounded-lg">
          Top Gainer
        </CardTitle>
        <CardTitle className="font-medium text-md mb-1 p-2 hover:bg-[#202127b6] rounded-lg ">
          Popular
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 ">
        {tradingPairs.map((pair, index) => (
          <div key={index} className="flex py-2 hover:bg-[#202127]">
            <span className="w-[40%] flex items-center gap-2">
              <Image
                src={pair.img}
                alt={`${pair.name} Logo`}
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="font-medium  ">{pair.name}</p>
            </span>
            <span className="w-[30%] text-right font-medium ">
              {pair.price}
            </span>
            <span
              className={`w-[30%] text-right font-medium  ${pair.changeColor}`}
            >
              {pair.change}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StatCardMobile;
