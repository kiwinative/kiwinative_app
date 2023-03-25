import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsReddit } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import "../dist/main.css";

const SideNav = () => {
  return (
    <div className="fixed flex flex-col mt-4 mx-0 justify-center items-center gap-10 flex-grow">
      <Link href=".">Home</Link>
      <Link href="./airdrop/">Airdrop</Link>
      <Link href="./sports/">Sports</Link>
      <Link href="casino/">Casino</Link>
      <Link href="./marketplace/">Market Place</Link>
      <Link href="./token/">The Token</Link>
      <div>
        <div className="container-none flex flex-col justify-center items-center gap-3 bg-green-50 p-4 ml-4 rounded-xl">
          <Link href="." className="block text-sm">
            Information
          </Link>
          <Link href="." className="block text-sm">
            Links
          </Link>
          <h3 className="text-sm">Contact Address</h3>
          <p className="text-xs">0x72920394...Bdfj34802</p>
          <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-full">
            Dark Mode
          </button>
          <div className="flex flex-row gap-3">
            <BsTwitter />
            <TbBrandTelegram />
            <BsInstagram />
            <BsReddit />
            <FaDiscord />
          </div>
          <p className="text-sm pt-2 border-t-2 border-black">
            @2023 Kiwi.io Ver 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
