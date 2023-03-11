"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import logo from "../public/kiwi-logo.png";
import Piechart from "@/components/Piechart";
import Barchart from "@/components/Barchart";

// import { Inter } from "@next/font/google";
import Carousel from "../components/Carousel";
import "../dist/main.css";
import { FaToriiGate, FaRandom, FaCoins } from "react-icons/fa";
import {
  BsBank2,
  BsStack,
  BsCoin,
  BsLightningFill,
  BsFillPeopleFill,
  BsFillShieldSlashFill,
  BsCurrencyExchange,
} from "react-icons/bs";
import { SiStackbit } from "react-icons/si";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className=" relative container-none flex flex-row content-evenly mx-0 mt-0 p-0 bg-yellow-100 h-full">
        <div className="basis-2/12 pt-2 bg-red-100 pr-0">
          <aside>
            <SideNav />
          </aside>
        </div>
        <div className="basis-10/12 bg-green-100 box-content">
          <div>
            <Carousel />
            <div className="pb-10">
              <h1 className="text-3xl font-bold text-center p-10">
                Supported Exchanges to buy Kiwi
              </h1>
              <div>
                <div className="container-none flex flex-row gap-10 justify-evenly">
                  <div className="flex flex-row items-center">
                    <FaToriiGate size={40} />
                    <p className="text-center pl-5 text-lg font-bold align-middle">
                      Gate.io
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <BsBank2 size={40} />
                    <p className="text-center pl-5 text-lg font-bold align-middle">
                      LBANK
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <SiStackbit size={40} />
                    <p className="text-center pl-5 text-lg font-bold align-middle">
                      HOTBIT
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <FaRandom size={40} />
                    <p className="text-center pl-5 text-lg font-bold align-middle">
                      WXYZ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-screen">
              <h1 className="text-5xl font-bold text-center p-10">
                About Kiwinative
              </h1>
              <div className="container-none flex flex-row items-center p-20">
                <div className="basis-1/2">
                  <Image src={logo} alt="" height={400} width={400} />
                </div>

                <div className="basis-1/2 flex flex-col px-15">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur.{" "}
                  </p>
                  <p className="pt-8">
                    Quis aute iure reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                    cupiditat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.{" "}
                  </p>
                  <p className="pt-8">
                    Quis aute iure reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                    cupiditat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="h-screen container-none flex flex-col justify-center items-center p-20">
              <h1 className="text-5xl font-bold text-center p-10 pt-15">
                Why Kiwinative?
              </h1>
              <div className="container-none flex flex-row flex-wrap items-center">
                <div className="basis-1/2 flex flex-row p-10 items-center">
                  <BsLightningFill size={65} />
                  <p className="pl-8">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className="basis-1/2 flex flex-row p-10">
                  <BsFillPeopleFill size={65} />
                  <p className="pl-8">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className="basis-1/2 flex flex-row p-10">
                  <BsFillShieldSlashFill size={65} />
                  <p className="pl-8">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className="basis-1/2 flex flex-row p-10">
                  <FaCoins size={65} />
                  <p className="pl-8">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua
                  </p>
                </div>
                <div className="basis-1/2 flex flex-row p-10">
                  <BsCurrencyExchange size={65} />
                  <p className="pl-8">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua
                  </p>
                </div>
              </div>
            </div>

            <div className="h-screen container-none flex flex-col justify-center items-center p-20">
              <h1 className="text-5xl font-bold text-center p-10 pt-15">
                Ecosytem
              </h1>
              <div className="container-none flex flex-row flex-wrap items-center">
                <div className="basis-2/5 p-4 m-10 bg-orange-300 rounded-lg">
                  <div className="container-none flex flex-row items-center">
                    <div className="basis-2/5">
                      <h1 className="text-2xl font-bold text-center">01.</h1>
                      <h1 className="text-2xl font-bold text-center">
                        AIRDROP
                      </h1>
                    </div>
                    <div className="basis-3/5 border-l-2 border-gray-700 p-3">
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-2/5 p-4 m-10 bg-orange-300 rounded-lg">
                  <div className="container-none flex flex-row items-center">
                    <div className="basis-2/5">
                      <h1 className="text-2xl font-bold text-center">02.</h1>
                      <h1 className="text-2xl font-bold text-center">SPORTS</h1>
                    </div>
                    <div className="basis-3/5 border-l-2 border-gray-700 p-3">
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-2/5 p-4 m-10 bg-orange-300 rounded-lg">
                  <div className="container-none flex flex-row items-center">
                    <div className="basis-2/5">
                      <h1 className="text-2xl font-bold text-center">03.</h1>
                      <h1 className="text-2xl font-bold text-center">CASINO</h1>
                    </div>
                    <div className="basis-3/5 border-l-2 border-gray-700 p-3">
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-2/5 p-4 m-10 bg-orange-300 rounded-lg">
                  <div className="container-none flex flex-row items-center">
                    <div className="basis-2/5">
                      <h1 className="text-2xl font-bold text-center">04.</h1>
                      <h1 className="text-2xl font-bold text-center">
                        MARKETPLACE
                      </h1>
                    </div>
                    <div className="basis-3/5 border-l-2 border-gray-700 p-3">
                      <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-auto flex flex-col">
              <h1 className="text-5xl font-bold text-center p-10 pt-15">
                TOKENOMICS
              </h1>
              <div className="container-none flex flex-row items-center justify-evenly">
                <div className="flex flex-col items-center">
                  <BsStack size={65} />
                  <h1 className="text-2xl pt-2 font-bold text-center">
                    LOREM-20
                  </h1>
                  <h1 className="text-2xl text-center">Lorem Token</h1>
                </div>
                <div className="flex flex-col items-center">
                  <BsCoin size={65} />
                  <h1 className="text-2xl pt-2 font-bold text-center">
                    $KIWINATIVE
                  </h1>
                  <h1 className="text-2xl text-center">Utility Token</h1>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-6xl font-bold text-center">20B</h1>
                  <h1 className="text-2xl pt-2 font-bold text-center">
                    20 BILLION
                  </h1>
                  <h1 className="text-2xl text-center">Total Supply</h1>
                </div>
              </div>
              <div className="h-screen container-none flex flex-row gap-5 items-center">
                <Piechart />
                <Barchart />
              </div>
            </div>

            <div className="h-screen w-full flex flex-col items-center">
              <h1 className="text-5xl font-bold text-center p-10">ROADMAP</h1>
              <div className="container-none flex flex-col h-full w-full items-center p-5 pt-0">
                <div className="container-none h-35 w-full flex flex-row items-center gap-10 mr-60">
                  <div className="basis-2/5 h-full p-5 border-r-4 border-green-500 border-dashed">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="basis 2/5 h-30 p-5 bg-orange-300 rounded-lg">
                    <h1>Phase 1</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                  </div>
                </div>

                <div className="container-none h-35 w-full flex flex-row items-center gap-10 mt-2 ml-60">
                  <div className="basis 2/5 h-30 p-5 bg-orange-300 rounded-lg">
                    <h1>Phase 2</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                  </div>
                  <div className="basis-2/5 h-full p-5 border-l-4 border-green-500 border-dashed">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>

                <div className="container-none h-35 w-full flex flex-row items-center mt-2 mr-60 gap-10">
                  <div className="basis-2/5 h-full p-5 border-r-4 border-yellow-500 border-dashed">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="basis 2/5 h-30 p-5 bg-orange-300 rounded-lg">
                    <h1>Phase 3</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                  </div>
                </div>

                <div className="container-none h-35 w-full flex flex-row items-center gap-10 mt-2 ml-60">
                  <div className="basis 2/5 h-30 p-5 bg-orange-300 rounded-lg">
                    <h1>Phase 4</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisci elit.
                    </p>
                  </div>
                  <div className="basis-2/5 h-full p-5 border-l-4 border-yellow-500 border-dashed"></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
