import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbAirBalloon } from "react-icons/tb";
import { MdSportsVolleyball, MdOutlineCasino, MdToken } from "react-icons/md";

export const Menus = [
  { title: "Home", icon: <AiOutlineHome /> },
  { title: "Airdrop", icon: <TbAirBalloon /> },
  {
    title: "Sports",
    icon: <MdSportsVolleyball />,
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },
  {
    title: "Casino",
    icon: <MdOutlineCasino />,
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },
  {
    title: "Marketplace",
    icon: <BsCashCoin />,
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },
  { title: "Token", icon: <MdToken /> },
];

export const InfoMenus = [
  {
    title: "Information",
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },

  {
    title: "Links",
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },
];
