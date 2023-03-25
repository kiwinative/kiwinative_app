import React, { useState } from "react";
import { BsChevronDoubleLeft, BsCashCoin } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import { FaToriiGate, FaRandom, FaCoins } from "react-icons/fa";
import {
  BsTwitter,
  BsInstagram,
  BsReddit,
  BsChevronDown,
} from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { SiStackbit } from "react-icons/si";
import { Menus, SubMenus } from "@/constants";

// import { HomeIcon } from '@heroicons/react/24/solid'

const SideNav2 = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuClose, setSubmenuClose] = useState(false);

  return (
    <div>
      <div
        className={`relative h-screen bg-lightIndigo p-5 pt-8 overflow-y-scroll ${
          open ? "w-72" : "w-20"
        } duration-300`}
      >
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lightGreen hover:text-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2"`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <AiOutlineHome />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => {
                      setSubmenuOpen(!submenuOpen);
                    }}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-lightGreen hover:text-white rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        <BsChevronDoubleLeft
          className={`absolute bg-white text-darkIndigo text-3xl p-2 rounded-full self-center mt-5 border border-darkIndigo cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />

        {/* <div className="mt-20">
          <div className="container-none flex flex-col justify-center items-center gap-3 bg-green-50 p-4 ml-3 rounded-xl">
            {SubMenus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-darkWhite rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2"`}
              >
                <span className="text-2xl block float-left">
                  <AiOutlineHome />
                </span>
                <span className="text-base font-medium flex-1">
                  {menu.title}
                </span>
              </li>
            ))}
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
        </div> */}
      </div>

      <div className="p-7">
        <h1 className="text-2xl font-semibold">Homepage</h1>
      </div>
    </div>
  );
};
export default SideNav2;
