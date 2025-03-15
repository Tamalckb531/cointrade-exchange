"use client";
import React from "react";
import Logo from "./HeaderComponent/Logo";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo + nav */}
        <div className=" flex items-center justify-center gap-6">
          <Logo />
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <p className="text-gray-500 transition hover:text-gray-500/75">
                  {" "}
                  About{" "}
                </p>
              </li>

              <li>
                <p className="text-gray-500 transition hover:text-gray-500/75">
                  {" "}
                  Careers{" "}
                </p>
              </li>

              <li>
                <p className="text-gray-500 transition hover:text-gray-500/75">
                  {" "}
                  History{" "}
                </p>
              </li>
            </ul>
          </nav>
        </div>
        {/* search  */}
        {/* Actions, portfolio and others */}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <p className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700">
                Login
              </p>

              <p className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block">
                Register
              </p>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
