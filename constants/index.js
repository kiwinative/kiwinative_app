import React from "react";
import { BsCashCoin, BsCheckCircle } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbAirBalloon } from "react-icons/tb";

import {
  MdSportsVolleyball,
  MdOutlineCasino,
  MdToken,
  MdPendingActions,
} from "react-icons/md";

export const Menus = [
  { title: "Home",id: 1, icon: <AiOutlineHome />, tooltip: "Home", active: true },
  { title: "Airdrop",id: 2, tooltip: "Airdrop", icon: <TbAirBalloon /> },
  {
    title: "Sports",
    id: 3,
    icon: <MdSportsVolleyball />,
    tooltip: "Sports",
    submenu: false,
  },
  {
    title: "Casino",
    id: 4,
    icon: <MdOutlineCasino />,
    tooltip: "Casino",
    submenu: false,
  },
  {
    title: "Marketplace",
    id: 5,
    icon: <BsCashCoin />,
    tooltip: "MarketPlace",
    submenu: false,
  },
  { title: "Token",id: 6, icon: <MdToken />, tooltip: "Token" },
];

export const InfoMenus = [
  {
    title: "Information",
    id: 1,
    submenu: true,
    submenuItems: [
      { title: "submenu 1", id: 1, },
      { title: "submenu 2", id: 2, },
      { title: "submenu 3", id: 3, },
    ],
  },

  {
    title: "Links",
    id: 2,
    submenu: true,
    submenuItems: [
      { title: "submenu 1", id: 1, },
      { title: "submenu 2", id: 2, },
      { title: "submenu 3", id: 3, },
    ],
  },
];

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
