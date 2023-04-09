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
  { title: "Home",id: 1, icon: <AiOutlineHome />, tooltip: "Home", active: true, },
  { title: "Airdrop",id: 2, tooltip: "Airdrop", icon: <TbAirBalloon />, active: true },
  {
    title: "KSports",
    id: 3,
    icon: <MdSportsVolleyball />,
    tooltip: "KSports",
    submenu: false,
    status: "Soon",
    active: false,
  },
  {
    title: "KCasino",
    id: 4,
    icon: <MdOutlineCasino />,
    tooltip: "KCasino",
    submenu: false,
    status: "Soon",
    active: false,
  },
  {
    title: "PeerMarket",
    id: 5,
    icon: <BsCashCoin />,
    tooltip: "PeerMarket",
    submenu: false,
    status: "Soon",
    active: false,
  },
  { title: "Token",id: 6, icon: <MdToken />, tooltip: "Token", active: true},
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
export const AboutKiwinative = <p>The Kiwinative token is a utility token based on BEP20 standards. 
  This web3 project, based on BSC is focused on usability and profitability. 
  It aims to build a decentralized community that is 
  focused on benefiting one from one another<br/>
  The primary goal will be to make it easier for millions of consumers all over
   the world to accept cryptocurrencies by developing solutions 
   that live up to their high standards. <br/>
   Kiwinative seeks to strike a balance between creating a sense of 
   scarcity for Kiwinative while ensuring that a large amount does not 
   accumulate into a very small number of hands. 
  </p>

//Objectives
export const Objectives = [
  {
    id: 0,
    icon: <BsFillShieldSlashFill className="text-green-500"/>,
    desc: "Kiwinative is a utility token based on BEP20 standards, which means it has a solid technical foundation that ensures its reliability, security, and interoperability with other blockchain-based systems"
  },
  {
    id: 1,
    icon: <BsPeopleFill className="text-green-500"/>,
    desc: " Kiwinative is user-friendly and profitable with gaming platforms, peer markets, and other features providing various ways to earn and use tokens."
  },
  {
    id: 2,
    icon: <BsLightningFill className="text-orange-400"/>,
    desc: "Kiwinative maintains a fair distribution of tokens by balancing scarcity and preventing accumulation in a few hands, increasing their value over time."
  },
  {
    id: 3,
    icon: <FaCoins className="text-[#ffd700]"/>,
    desc: "Kiwinative has a strategic allocation of tokens for development, research, and exploring business opportunities in the fast-moving crypto asset space."
  },
  {
    id: 4,
    icon: <BsCurrencyExchange className="text-[#ffd700]"/>,
    desc: "Kiwinative's auto tax feature ensures sustainable growth by incurring a small tax on every transaction and using the revenue for marketing and ecosystem development."
  },
]

//Ecosystem
export const Ecosystem = [
  {
    id: 0,
    number: "01.",
    title: "AIRDROP",
    desc: "Upon successfully completing the bounty task, holders are rewarded with free tokens as a token of appreciation."
  },
  {
    id: 1,
    number: "02.",
    title: "KSPORTS",
    desc: "Web3 peer sports betting platform for football, basketball, ice hockey, snooker, tennis. Bet and win on sports predictions."
  },
  {
    id: 2,
    number: "03.",
    title: "KCASINO",
    desc: "Web3 casino platform with games like poker, jackpot, dice, etc. Earn Kiwinative by winning bets on any game."
  },
  {
    id: 3,
    number: "04.",
    title: "PEERMARKET",
    desc: "Web3 platform for buying and selling any item with Kiwinative as a transaction medium."
  },
];

//Roadmaps
export const roadmaps = [
  {
    title: "Phase 1.",
    objective: "Research on Web3 and idea conceptualization",
    icon: <BsCheckCircle color="#39ff14" />,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2022",
    points: [
      "Understand Web3 technology; research, protocols, advantages, and tools.",
      "Brainstorm and Conceptualize; ideas, leverage, unique features, potential use cases.",
      "Market Research and Analysis; feasibility, the potential for success, competitors, user behaviour, trends, refine.",
    ],
  },
  {
    title: "Phase 2.",
    objective: "Design And Prototyping",
    icon: <BsCheckCircle color="#39ff14" className="text-bold" />,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Website Design, Social Media Creation.",
      "Smart-Contract creation & Testnet Testing.",
      "developing working sales and marketing Strategy",
    ],
  },
  {
    title: "Phase 3.",
    objective: "Website & MVP Launch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Kiwinative Website Lauch",
      "Deploy the Kiwinative smart contract on the Mainnet and conduct an audit.",
      "Raise funds through private sale, presale, battle stake, and airdrop",
      "Pancakeswap, Coingecko, and Coinmarketcap Listing; community events and press releases.",
    ],
  },
  {
    title: "Phase 4.",
    objective: "KSports test and Lauch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#E6DEDD",
    // date: "May 2023 - August 2023",
    points: [
      "Develop and deploy Kiwinative sports on Testnet",
      "Launch Kiwinative sports on the Mainnet.",
      "Release Kiwinative sports dapp on the web.",
      "Publish Kiwinative sports on the Google Play Store.",
    ],
  },
  {
    title: "Phase 5.",
    objective: "KRaffle test and Lauch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#383E56",
    // date: "September 2023",
    points: [
      "Develop and deploy the Kiwinative Raffle on Testnet",
      "Launch the Kiwinative Raffle on the Mainnet.",
      "Integrate the Kiwinative Raffle into the Kiwinative sports dapp.",
    ],
  },
  {
    title: "Phase 6.",
    objective: "KCasino test and Lauch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#E6DEDD",
    // date: "May 2023 - August 2023",
    points: [
      "Develop and deploy Kiwinative casino on Testnet",
      "Launch Kiwinative casino on the Mainnet.",
      "Integrate the Kiwinative Raffle into the Kiwinative sports dapp.",
    ],
  },
  {
    title: "Phase 7.",
    objective: "PeerMarket test and Lauch",
    icon: <MdPendingActions color="orange" />,
    iconBg: "#383E56",
    // date: "September 2023",
    points: [
      "Develop and deploy Kiwinative PeerMarket on Testnet",
      "Launch Kiwinative PeerMarket on the Mainnet.",
      "Integrate the Kiwinative Raffle into the Kiwinative sports dapp.",
    ],
  },
];

//Footer Disclaimer
export const Disclaimer = "Don’t hesitate to subscribe to the latest news on KWN Token social media as well as updated cryptocurrency blogs to get updated on KIWINATIVE"