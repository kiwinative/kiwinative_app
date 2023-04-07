import React, { useContext, useEffect, useState } from "react";
import {
  BsChevronDown,
  BsChevronDoubleLeft,
  BsTwitter,
  BsInstagram,
  BsReddit,
} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { MdContentCopy, MdOutlineLightMode } from "react-icons/md";
import { Menus, InfoMenus } from "@/constants";
import Link from "next/link";
import { useGlobalContext } from "@/app/Context/store";

const SideNav = (props) => {
  const {
    open,
    setOpen,
    submenuOpen,
    setSubmenuOpen,
    infosubmenuOpen,
    setInfosubmenuOpen,
    linksubmenuOpen,
    setLinksubmenuOpen,
    pageWidth,
    setPageWidth,
    sidenavWidth,
    setSidenavWidth,
    tooltip,
    setTooltip,
    mobileview,
    setMobileview,
  } = useGlobalContext();

  // useEffect(() => {
  //   if(open && (window.innerWidth < 976) && (window.innerWidth > 769)){
  //     setPageWidth("75vw")
  //   }
  // }, [open])

  return (
    <div>
      <div
        className={`hidden md:block fixed h-screen bg-lightIndigo p-5 mt-[50px] pt-8 pb-[100px] overflow-y-scroll scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700 ${
          open
            ? `w-[20vw] md:max-mlg:w-[25vw] lg:w-[20vw]`
            : `w-[5vw] md:max-mlg:w-[10vw] xl:w-[5vw] lg:w-[5vw]`
        } duration-300 `}
      >
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={menu.id}
                className={`group/item text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lightGreen hover:text-white active:bg-lightGreen active:text-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span
                  className={`text-2xl md:max-mlg:text-lg block float-left ${
                    !open &&
                    "pr-2 py-1 hover:bg-lightGreen hover:text-white rounded-md"
                  }`}
                >
                  {menu.icon ? menu.icon : <AiOutlineHome />}
                </span>

                <span
                  className={`text-base md:max-mlg:text-sm font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>

                <span
                  className={`group/edit invisible group-hover/item:${
                    open ? "invisible" : "visible"
                  }
                  } items-center`}
                >
                  <span
                    className={`group-hover/edit:text-white inline-block text-center text-xs rounded-lg m4-10 fixed bg-darkGreen px-2 py-1 z-15`}
                  >
                    {menu.tooltip}
                  </span>
                </span>
              </li>
            </>
          ))}
        </ul>

        {/* Second Menu Box */}
        <div
          className={`bg-darkIndigo rounded-xl px-6 py-4 mt-5 w-full ${
            !open && "hidden"
          }`}
        >
          <ul className="pt-2">
            {InfoMenus.map((menu, index) => (
              <>
                <li
                  key={menu.id}
                  className={`text-gray-300 text-sm md:max-mlg:text-xs flex items-center gap-x-1 cursor-pointer p-2 hover:bg-lightGreen hover:text-white active:bg-lightGreen active:text-white rounded-md`}
                >
                  <span
                    className={`text-sm md:max-mlg:text-xs font-small flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  <span className="block"></span>
                  {index == 0 && open && (
                    <BsChevronDown
                      className={`${infosubmenuOpen && "rotate-180"}`}
                      onClick={() => {
                        setInfosubmenuOpen(!infosubmenuOpen);
                      }}
                    />
                  )}
                  {index == 1 && open && (
                    <BsChevronDown
                      className={`${linksubmenuOpen && "rotate-180"}`}
                      onClick={() => {
                        setLinksubmenuOpen(!linksubmenuOpen);
                      }}
                    />
                  )}
                </li>

                {index == 0 && infosubmenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={submenuItem.id}
                        className="text-gray-300 text-sm md:max-mlg:text-xs flex items-center cursor-pointer p-1 pl-2 hover:bg-lightGreen hover:text-white active:bg-lightGreen active:text-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}

                {index == 1 && linksubmenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={submenuItem.id}
                        className="text-gray-300 text-sm md:max-mlg:text-xs flex items-center cursor-pointer p-1 pl-2 hover:bg-lightGreen hover:text-white active:bg-lightGreen active:text-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
          <h3 className="text-sm md:max-mlg:text-xs text-darkWhite py-1">Contract Address:</h3>
          <div className="inline-flex gap-x-3 items-center">
            <p className="text-xs text-darkWhite py-2">
              0x72920394...<span className="md:max-mlg:hidden">Bdfj34802</span>
            </p>
            <MdContentCopy className="text-base text-white hover:bg-lightWhite" />
          </div>

          <button className="text-sm bg-darkGreen hover:bg-lightGreen text-white py-1 px-4 mt-2 mb-4 rounded-full items-center">
            <MdOutlineLightMode className="inline text-center text-sm md:max-mlg:text-xs mb-1" />&nbsp;
            <span className="md:max-mlg:text-[10px]">Light Mode</span>
          </button>
          <div className="flex flex-row gap-3">
            <BsTwitter className="text-darkWhite" />
            <TbBrandTelegram className="text-darkWhite" />
            <BsInstagram className="text-darkWhite" />
            <BsReddit className="text-darkWhite" />
            <FaDiscord className="text-darkWhite" />
          </div>
          <p className="text-xs  text-darkWhite pt-2 mt-2 border-t-2 border-darkWhite">
            &#169; Kiwinative.pro ver 1.0.0
          </p>
        </div>

        <div className="mb-10">
          <BsChevronDoubleLeft
            className={`absolute bg-white text-darkIndigo text-3xl p-2 rounded-full self-center mt-5 mb-10 border border-darkIndigo cursor-pointer ${
              !open && "rotate-180"
            } duration-300`}
            onClick={() => {
              setOpen(!open);
              open && setPageWidth("95vw")

              if(open && (window.innerWidth < 976) && (window.innerWidth > 769)){
                setPageWidth("75vw")
              }
              
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SideNav;
