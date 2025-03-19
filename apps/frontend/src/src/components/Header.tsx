"use client";
import React, { useState } from "react";
import Logo from "./HeaderComponent/Logo";
import SearchBox from "./HeaderComponent/SearchBox";
import { ChartPie, Search, Sparkle, Tally4 } from "lucide-react";
import { CircleUser, EllipsisVertical, LogOut, Plus } from "lucide-react";
import ProfileImage from "./HeaderComponent/ProfileImage";
import BorderMagic from "./AnimatedButtons/BorderMagic";
import Shimmer from "./AnimatedButtons/ShimmerBtn";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [accountOpen, setAccountOpen] = useState<boolean>(false);
  const router = useRouter();

  const setAccountMenu = () => {
    setMenuOpen(false);
    setAccountOpen((prev) => !prev);
  };

  const setMenu = () => {
    setAccountOpen(false);
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className="w-full px-2 md:p-0">
      <div className="mx-auto flex h-16  items-center justify-between gap-8 sm:px-6 lg:px-8">
        {/* Logo + nav */}
        <div className=" flex items-center justify-center gap-6">
          <Logo />
          <nav className=" hidden md:block cursor-pointer">
            <ul className="flex items-center gap-7 lg:text-md md:text-sm font-bold">
              <li>
                <span
                  className="text-gray-400 transition hover:text-gray-400/75"
                  onClick={() => router.push("/market")}
                >
                  {" "}
                  Market
                </span>
              </li>

              <li>
                <p className="text-gray-400 transition hover:text-gray-400/75">
                  {" "}
                  Trade
                </p>
              </li>

              <li>
                <p className="text-gray-400 transition hover:text-gray-400/75">
                  {" "}
                  Lend
                </p>
              </li>
            </ul>
          </nav>
        </div>
        {/* search  */}
        <div className=" block md:hidden lg:block">
          <SearchBox />
        </div>
        {/* Actions, portfolio and others */}
        <div className="flex items-center justify-end md:justify-between">
          <div className="flex items-center gap-4">
            <div className=" hidden md:flex md:gap-3 mr-5 ">
              {/* <BorderMagic text="Deposit" textColor="text-teal-400" />
              <BorderMagic text="Withdraw" textColor="text-blue-400" /> */}
              <span onClick={() => router.push("/login")}>
                <Shimmer text="login" textColor="text-teal-400" />
              </span>
              <span onClick={() => router.push("/signup")}>
                <Shimmer text="sign-up" textColor="text-blue-400" />
              </span>
            </div>

            <ul className=" hidden md:flex md:items-center md:gap-7 text-md font-bold">
              {/* Search Icon (Visible only on Tablet) */}
              <li className="lg:hidden">
                <p className="text-gray-400 transition hover:text-gray-400/75 cursor-pointer">
                  <Search size={20} />
                </p>
              </li>
              <li>
                <p className="text-gray-400 transition hover:text-gray-400/75 cursor-pointer">
                  {" "}
                  <ChartPie size={20} />
                </p>
              </li>

              <li>
                <p className="text-gray-400 transition hover:text-gray-400/75 cursor-pointer">
                  {" "}
                  <Sparkle size={20} />
                </p>
              </li>

              <li>
                <p className="text-gray-400 transition hover:text-gray-400/75">
                  {" "}
                  <span onClick={setAccountMenu} className=" cursor-pointer">
                    <ProfileImage />
                  </span>
                </p>
              </li>
            </ul>

            <div className="md:hidden flex items-center gap-4">
              <span onClick={setAccountMenu}>
                <ProfileImage />
              </span>
              <button className="text-white" onClick={setMenu}>
                <Tally4 size={21} />
              </button>
            </div>
          </div>

          <MobileMenu isOpen={menuOpen} />
          <AccountPopover isOpen={accountOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={` absolute right-0 top-16 w-60 bg-[#0E0F14] text-white border rounded-lg transition-all duration-300 ease-in-out z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center gap-4 p-5 text-lg font-bold">
        <li className="hover:text-gray-300 ">Market</li>
        <li className="hover:text-gray-300 ">Trade</li>
        <li className="hover:text-gray-300 ">Lend</li>
        <li className="hover:text-gray-300 ">Profile</li>
        <li className="hover:text-gray-300 ">Rewards</li>
      </ul>
      <div className="flex justify-center gap-8 py-5">
        <BorderMagic text="Deposit" textColor="text-teal-400" />
        <BorderMagic text="Withdraw" textColor="text-blue-400" />
        {/* <Shimmer text="Login" textColor="text-teal-400" />
        <Shimmer text="Sign-up" textColor="text-blue-400" /> */}
      </div>
    </div>
  );
};

const AccountPopover = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={` absolute right-2 top-16 text-slate-400 er rounded-lg transition-all duration-300 ease-in-out z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="z-20 ml-2 mt-2 flex w-[300px] flex-col overflow-x-hidden rounded-md bg-[#14151B] px-2 text-baseTextHighEmphasis shadow-lg shadow-black transition data-[closed]:-translate-y-6 data-[closed]:translate-x-4 data-[closed]:scale-90 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75"
        tabIndex={-1}
      >
        {/* Profile Section */}
        <div className="mb-2 mt-2 flex rounded-lg px-3 py-2 hover:bg-[#202127]">
          <CircleUser className="my-auto shrink-0 text-baseIcon" size={20} />
          <div className="ml-4 overflow-hidden">
            <p className="truncate text-white">Tamal Chakraborty</p>
            <p className="truncate text-sm text-baseTextMedEmphasis">
              ckbtamaldipnew@gmail.com
            </p>
          </div>
        </div>
        {/* Accounts Section */}
        <div className="flex flex-col w-full gap-1 border-t  border-t-slate-800 pt-2">
          <p className="font-medium mb-2 px-3 pt-2 text-xs uppercase">
            Accounts
          </p>
          <div className="flex items-center justify-between flex-row flex-1 rounded-lg px-3 py-2 hover:cursor-pointer bg-[#202127]">
            <div className="flex items-center">
              <div className="mr-[10px] flex flex-col justify-center">
                <ProfileImage />
              </div>
              <p className="text-sm font-normal text-white">Main</p>
            </div>
            <EllipsisVertical
              className="text-baseIcon hover:text-baseIconHover"
              size={24}
            />
          </div>
        </div>
        {/* Add Subaccount */}
        <div className="mx-auto mb-2 mt-1 flex w-full">
          <button className="w-full">
            <div className="flex items-center justify-between flex-row flex-1 rounded-lg px-3 hover:cursor-pointer hover:bg-[#202127] py-2 ">
              <div className="flex items-center">
                <Plus className="mr-[10px] text-baseIcon" size={24} />
                <p className="text-sm font-normal">Add Subaccount</p>
              </div>
            </div>
          </button>
        </div>
        {/* Logout Section */}
        <div className="border-t  border-t-slate-800 py-2">
          <div className="flex justify-between rounded-lg px-3 py-2 hover:bg-[#202127]">
            <span className="my-auto flex">
              <LogOut className="size-5 text-baseIcon" />
              <span className="ml-[10px] text-sm text-white">Log out</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
