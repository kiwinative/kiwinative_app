import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BsWallet2 } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="h-auto w-full top-0 fixed z-20 bg-darkIndigo">
      <div className="flex items-center justify-between pl-2 md:pl-10 py-2 pr-3 md:pr-12">
        <div className="flex items-center justify-start p-2">
          <div>
            <Image
              alt="logo"
              src={logo}
              className="sm:w-[35px] md:w-[45px] w-[55px] sm:h-[35px] md:h-[45px] h-[55px]"
            />
          </div>
          <div>
            <h3 className="sm:text-[11px] md:text-[17px] text-[18px] tracking-[1px] pt-6 font-extrabold text-darkWhite">
              Kiwinative
            </h3>
          </div>
        </div>
        <div>
          <button className="inline-flex text-[11px] md:text-[15px] gap-x-2 md:gap-x-4 items-center text-white font-bold sm:py-2 py-2  pr-3 md:px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            <BsWallet2 className="invisible md:visible" />
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
