import React from "react";
import { BsStack, BsTwitter, BsDiscord } from "react-icons/bs";
import { TbBrandTelegram, TbBrandReddit } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="h-auto w-[80vw]">
      <div className="bg-lightIndigo mx-[60px] p-12 bg-lightIndigo rounded-xl mb-5">
        <div>
          <h1 className="text-darkWhite font-black text-darkWhite text-center lg:text-[35px] sm:text-[25px] xs:text-[15px] text-[25px] pb-10">
            Don't miss out. Stay updated.
          </h1>
        </div>
        <div className="inline-flex gap-x-10 items-center text-center mb-10 ml-[18vw]">
          <form>
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-8 rounded-3xl bg-[#6c8726] opacity-20 text-darkWhite"
            />
          </form>
          <button className="items-center text-white font-bold py-2 px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            Connect Wallet
          </button>
        </div>
        <div>
          <h1 className="text-darkWhite text-center">
            Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </h1>
        </div>
        <div className="inline-flex gap-x-5 items-center py-3 text-center ml-[30vw]">
          <BsTwitter className="text-white" />
          <TbBrandTelegram className="text-white" />
          <TbBrandReddit className="text-white" />
          <BsDiscord className="text-white" />
        </div>
        <div>
          <p className="text-darkWhite text-center py-2 ">
            Copyright &#169;2023. All rights reserved by Kiwinative.
          </p>
        </div>
      </div>
    </div>
  );
}
