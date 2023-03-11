import React from "react";
import Image from "next/image";
import logo from "../public/kiwi-logo.png";

export default function Header() {
  return (
    <div className="relative container-none mx-0 mt-0 p-0">
      <div className="flex items-center justify-between pl-10 py-2 pr-12">
        <div className="flex items-center justify-start p-2">
          <div>
            <Image alt="logo" src={logo} width={80} height={80} />
          </div>
          <div>
            <h3 className="pt-6 font-bold text-red-600">KIWI</h3>
          </div>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
