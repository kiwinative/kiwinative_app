import React from "react";
import { BsStack, BsTwitter, BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { useGlobalContext } from "@/app/Context/store";
import { Disclaimer } from "@/constants";

export default function Footer() {
  const { open, pageWidth} = useGlobalContext();
  return (
    <div className={`h-auto w-[${pageWidth}]`}>
      <div className="mx-[15px] md:mx-[60px] lg:mx-[15px] md:max-lg:mx-[15px] p-6 sm:p-12 pb-3 bg-lightIndigo rounded-xl mb-5">
        <div>
          <h1 className="font-black text-darkWhite text-center lg:text-[35px] sm:text-[25px] xs:text-[15px] text-[25px] pb-10">
            Stay updated. Don't miss out!
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-7 gap-y-2 sm:gap-y-0 sm:gap-x-10 items-center justify-between md:justify-evenly text-center mb-10">
          <form>
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-2 px-2 sm:px-8 rounded-3xl bg-[#6c8726] opacity-20 text-white w-[50vw]"
            />
          </form>
          <button className="items-center text-white text-inline text-sm md:font-bold py-2 px-4 rounded-full bg-lightGreen hover:bg-darkGreen">
            Contact us
          </button>
        </div>
        <div>
          <h1 className=" text-sm text-darkWhite text-center font-poppins">
            {Disclaimer}
          </h1>
        </div>
        <div className="flex flex-row gap-x-7 items-center py-3 text-center justify-center">
          <a href="https://twitter.com/KIWINATIVEKWN?t=Viy21C9rs8BgUQVv8LKLQA&s=09" target="_blank"><BsTwitter className="text-white text-[30px] bg-lightGreen p-2 rounded-full" /></a>
          <a href="https://t.me/+0g-hPTQ3OAZlMGI8" target="_blank"><FaTelegramPlane className="text-white text-[30px] bg-lightGreen p-2 rounded-full" /></a>
          <a href="https://www.reddit.com/r/KIWINATIVE1?utm_medium=android_app&utm_source=share" target="_blank"><GrReddit className="text-white text-[30px] bg-lightGreen p-2 rounded-full" /></a>
          <a href="https://discord.gg/KhCa6tuJ" target="_blank"><BsDiscord className="text-white text-[30px] bg-lightGreen p-2 rounded-full" /></a>
        </div>
        <div>
          <p className="text-sm text-darkWhite text-center">
            Copyright &#169;2023 | All rights reserved by Kiwinative.
          </p>
        </div>
      </div>
    </div>
  );
}
