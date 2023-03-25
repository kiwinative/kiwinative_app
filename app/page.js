"use client";
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
import SideNav2 from "@/components/SideNav2";
import Home from "@/components/Home";

// import { HomeIcon } from '@heroicons/react/24/solid'

const HomePage = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuClose, setSubmenuClose] = useState(false);

  return (
    <div className="flex">
      <SideNav2 />
      <Home />
    </div>
  );
};
export default HomePage;
