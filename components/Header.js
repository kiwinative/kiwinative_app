import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BsWallet2 } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { useGlobalContext } from "@/app/Context/store";
import { ConnectWallet } from "@thirdweb-dev/react";


export default function Header() {
  const {menuToggle, setMenuToggle} = useGlobalContext();
  return (
    <nav className="h-auto w-full top-0 fixed z-20 bg-darkIndigo">
      <div className="w-full flex flex-row items-center justify-between pl-2 md:pl-10 pr-3 md:pr-12">
        <div className="inline-flex items-center justify-start">
      <GoKebabVertical className="block md:hidden text-white text-[30px]" onClick={() => {setMenuToggle(!menuToggle)}}/>
      <div className="inline-flex items-center justify-start p-2">
          <div>
            <Image
              alt="logo"
              src={logo}
              className="w-[35px] sm:w-[35px] md:w-[45px] h-[35px] sm:h-[35px] md:h-[45px] "
            />
          </div>
          <div>
            <h3 className="sm:text-[11px] md:text-[17px] text-[9px] tracking-[0.3px] ml-[-10px] pt-6 font-extrabold text-lightGreen">
              Kiwinative
            </h3>
          </div>
        </div>
        </div>
       
        <div>
        <ConnectWallet
          accentColor='#90a55c'
          colorMode='dark'
          className="text-[11px] md:text-[15px] md:gap-x-4 items-center text-white font-bold sm:py-2 py-2 md:py-3 rounded-full bg-lightGreen hover:bg-darkGreen"
          />
          {/* <button className="inline-flex text-[11px] md:text-[15px] gap-x-2 md:gap-x-4 items-center text-white font-bold sm:py-2 py-2  pr-3 md:px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            <BsWallet2 className="invisible md:visible" />
            Connect Wallet
          </button> */}
        </div>
      </div>
    </nav>
  );
}
