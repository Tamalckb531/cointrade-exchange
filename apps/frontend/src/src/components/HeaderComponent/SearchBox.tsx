import React from "react";
import { Search } from "lucide-react";

interface search {
  pageMarket: boolean;
}

const SearchBox = ({ pageMarket }: search) => {
  return (
    <div className="flex items-center justify-between flex-row  md:w-[340px] md:max-w-[340px] max-w-[150px] w-[150px] flex-1 cursor-pointer overflow-hidden rounded-xl  bg-[#202127] md:p-1 text-slate-400">
      <div className="flex items-center flex-row flex-1">
        <div className="mx-2 hidden md:block">
          <Search size={18} />
        </div>
        <div className="mx-2 block md:hidden">
          <Search size={12} />
        </div>
        <input
          type="text"
          placeholder="Search markets"
          className="h-8 w-full border-0 bg-baseBackgroundL2 p-0 text-xs md:text-sm font-normal outline-none focus:ring-0"
        />
      </div>
      {!pageMarket && (
        <div className=" hidden mx-2 md:flex h-6 w-6 select-none items-center justify-center rounded border text-sm border-slate-600">
          /
        </div>
      )}
    </div>
  );
};

export default SearchBox;
