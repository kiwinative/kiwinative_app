import React from "react";
import { BsStack, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { useGlobalContext } from "@/app/Context/store";

export default function Footer() {
  const { open, pageWidth, setPageWidth } = useGlobalContext();
  return (
    <div className={`h-auto w-[${pageWidth}]`}>
      <div className=" mx-[60px] p-12 pb-3 bg-lightIndigo rounded-xl mb-5">
        <div>
          <h1 className="font-black text-darkWhite text-center lg:text-[35px] sm:text-[25px] xs:text-[15px] text-[25px] pb-10">
            Don't miss out. Stay updated.
          </h1>
        </div>
        <div className="flex flex-row gap-x-10 items-center text-center mb-10 justify-center">
          <form>
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-8 rounded-3xl bg-[#6c8726] opacity-20 text-white"
            />
          </form>
          <button className="items-center text-white font-bold py-2 px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            Connect Wallet
          </button>
        </div>
        <div>
          <h1 className=" text-sm text-darkWhite text-center">
            Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </h1>
        </div>
        <div className="flex flex-row gap-x-7 items-center py-3 text-center justify-center">
          <BsTwitter className="text-white text-[30px] bg-lightGreen p-2 rounded-full" />
          <FaTelegramPlane className="text-white text-[30px] bg-lightGreen p-2 rounded-full" />
          <GrReddit className="text-white text-[30px] bg-lightGreen p-2 rounded-full" />
          <BsDiscord className="text-white text-[30px] bg-lightGreen p-2 rounded-full" />
        </div>
        <div>
          <p className="text-sm text-darkWhite text-center">
            Copyright &#169;2023. All rights reserved by Kiwinative.
          </p>
        </div>
      </div>
    </div>
  );
}
