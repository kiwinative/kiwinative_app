import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BsWallet2 } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="h-auto w-full top-0 fixed z-20 bg-darkIndigo">
      <div className="flex items-center justify-between pl-10 py-2 pr-12">
        <div className="flex items-center justify-start p-2">
          <div>
            <Image alt="logo" src={logo} width={55} height={55} />
          </div>
          <div>
            <h3 className="text-[18px] tracking-[1px] pt-6 font-extrabold text-darkWhite">
              Kiwinative
            </h3>
          </div>
        </div>
        <div>
          <button className="inline-flex gap-x-4 items-center text-white font-bold py-2 px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            <BsWallet2 />
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
