import React from "react";
import { BsCashCoin, BsCheckCircle, BsLightningFill, BsFillShieldSlashFill, BsCurrencyExchange, BsPeopleFill, } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbAirBalloon } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import pancakeswap from "../public/pancakeswap.svg";

import {
  MdSportsVolleyball,
  MdOutlineCasino,
  MdToken,
  MdPendingActions,
} from "react-icons/md";
import { SiStackbit } from "react-icons/si";
import Image from "next/image";

//Main Menu anchor tags
export const Menus = [
  { title: "Home",id: 1, icon: <AiOutlineHome />, tooltip: "Home", active: true },
  { title: "Airdrop",id: 2, tooltip: "Airdrop", icon: <TbAirBalloon /> },
  {
    title: "KSports",
    id: 3,
    icon: <MdSportsVolleyball />,
    tooltip: "KSports",
    submenu: false,
  },
  {
    title: "KCasino",
    id: 4,
    icon: <MdOutlineCasino />,
    tooltip: "KCasino",
    submenu: false,
  },
  {
    title: "PeerMarket",
    id: 5,
    icon: <BsCashCoin />,
    tooltip: "PeerMarket",
    submenu: false,
  },
  { title: "Token",id: 6, icon: <MdToken />, tooltip: "Token" },
];

//Smaller menu visible on large screens
export const InfoMenus = [
  {
    title: "Information",
    id: 1,
    submenu: true,
    submenuItems: [
      { title: "White paper", id: 1, },
      { title: "Medium", id: 2, },
    ],
  },

  {
    title: "Links",
    id: 2,
    submenu: true,
    submenuItems: [
      { title: "Binance explorer", id: 1, },
    ],
  },
];

//Supported Exchanges
export const Exchanges = [
  {
    id: 0,
    icon: <Image src={pancakeswap} height={100} width={100} className="text-red-500 text-[25px] sm:text-[40px]"/>,
    company: "PANCAKESWAP",
    isTrue: "soon"
  },
  // {
  //   id: 1,
  //   icon: <BsBank2 className="text-[#ffd700] text-[25px] sm:text-[40px]"/>,
  //   company: "LBANK"
  // },
  // {
  //   id: 2,
  //   icon: <SiStackbit className="text-orange-400 text-[25px] sm:text-[40px]"/>,
  //   company: "HOTBIT"
  // },
  // {
  //   id: 3,
  //   icon: <FaRandom className="text-red-400 text-[25px] sm:text-[40px]"/>,
  //   company: "WXYZ"
  // },
]



//About Kiwinative
export const AboutKiwinative = <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrum exercitationem ullam
corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
consequatur.<br/>
Quis aute iure reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
cupiditat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum. <br/> Quis aute iure reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
cupiditat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.</p>

//Objectives
export const Objectives = [
  {
    id: 0,
    icon: <BsLightningFill className="text-orange-400"/>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    icon: <BsPeopleFill className="text-green-500"/>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 2,
    icon: <BsFillShieldSlashFill className="text-green-500"/>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 3,
    icon: <FaCoins className="text-[#ffd700]"/>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 4,
    icon: <BsCurrencyExchange className="text-[#ffd700]"/>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
]

//Ecosystem
export const Ecosystem = [
  {
    id: 0,
    number: "01.",
    title: "AIRDROP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 1,
    number: "02.",
    title: "SPORTS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 2,
    number: "03.",
    title: "CASINO",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
  {
    id: 3,
    number: "04.",
    title: "MARKETPLACE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sedeiusmod tempor incidunt ut labore et dolore magna aliqua"
  },
];

//Roadmaps
export const roadmaps = [
  {
    title: "Phase 1.",
    objective: "Research, Ideation & Design ",
    icon: <BsCheckCircle color="#39ff14" />,
    iconBg: "#383E56",
    date: "Sept 2022 - Dec 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisci elit..",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
    ],
  },
  {
    title: "Phase 2.",
    objective: "Prototyping",
    icon: <BsCheckCircle color="#39ff14" className="text-bold" />,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisci elit..",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
    ],
  },
  {
    title: "Phase 3.",
    objective: "Website & MVP Launch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisci elit..",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
    ],
  },
  {
    title: "Phase 4.",
    objective: "Ecosystem Pilot Tests",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisci elit..",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
    ],
  },
  {
    title: "Phase 5.",
    objective: "Final Release",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#383E56",
    date: "September 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisci elit..",
      "Lorem ipsum dolor sit amet consectetur adipisci elit.",
    ],
  },
];

//Footer Disclaimer
export const Disclaimer = "Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrum exercitationem ullam corporissuscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."