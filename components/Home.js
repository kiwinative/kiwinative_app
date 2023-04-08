import React, { useContext } from "react";
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
import Image from "next/image";
import logo from "../public/logo.svg";
import yellowLogo from "../public/yellow-logo-icon.svg";
import { styles } from "@/styles";
import Roadmap from "./Roadmap";
import Footer from "./Footer";
import Carousel from "./Carousel";
import MobileMenu from "./MobileMenu";
import Blur from "./Blur";
import { useGlobalContext } from "@/app/Context/store";
import { DoughnutChart } from "./DoughnutChart";

const Home = () => {
  const { pageWidth, open, menuToggle, setMenuToggle, } = useGlobalContext();
  return (
    <div
      className={`h-auto w-[${pageWidth}] mt-[50px] overflow-x-none ${
        open
            ? `md:max-mlg:w-[75vw] md:max-mlg:ml-[8vw] lg:w-[80vw] lg:ml-[10vw] `
            : `md:max-mlg:w-[90vw] lg:w-[95vw]`
      } ${menuToggle && "fixed"}`}
    >
      <div className=" bg-darkIndigo box-content">
        <div>
          <Carousel />

          <div
            className={`w-[100vw] px-1 md:w-[${pageWidth}] pb-10 bg-lightIndigo`}
          >
            <h1 className={`${styles.headerText} mt-5 pt-5`}>
              Supported Exchanges
            </h1>
            <div>
              <div className="flex flex-row flex-wrap gap-4 sm:gap-10 justify-evenly pt-3">
                <div className="flex flex-row items-center">
                  <FaToriiGate className="text-red-500 text-[25px] sm:text-[40px]" />
                  <p className="text-center pl-2 sm:pl-5 text-base sm:text-lg font-bold align-middle text-darkWhite">
                    GATE.IO
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <BsBank2 className="text-[#ffd700] text-[25px] sm:text-[40px]" />
                  <p className="text-center pl-2 sm:pl-5 text-base sm:text-lg font-bold align-middle text-darkWhite">
                    LBANK
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <SiStackbit className="text-orange-400 text-[25px] sm:text-[40px]" />
                  <p className="text-center pl-2 sm:pl-5 text-base sm:text-lg font-bold align-middle text-darkWhite">
                    HOTBIT
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <FaRandom className="text-red-400 text-[25px] sm:text-[40px]" />
                  <p className="text-center pl-2 sm:pl-5 text-base sm:text-lg font-bold align-middle text-darkWhite">
                    WXYZ
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <FaRandom className="text-rose-500 text-[25px] sm:text-[40px]" />
                  <p className="text-center pl-2 sm:pl-5 text-base sm:text-lg font-bold align-middle text-darkWhite">
                    ABC
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`h-auto md:h-screen md:max-mlg:h-auto w-[${pageWidth}]`}>
            <h1 className={`${styles.subHeaderText}`}>
              What to know about Kiwinative
            </h1>
            <h1 className={styles.headerText}>About Kiwinative</h1>
            <div className="container-none flex flex-col sm:flex-row items-center p-10 sm:p-20">
              <div className="basis-1/2 pb-6">
                <Image src={logo} alt="" height={400} width={400} />
              </div>

              <div className="basis-1/2 flex flex-col px-15">
                <p className="text-darkWhite">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur.{" "}
                </p>
                <p className="pt-8 text-white">
                  Quis aute iure reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                  cupiditat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </p>
                <p className="pt-8 text-white">
                  Quis aute iure reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
                  cupiditat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`h-auto md:h-screen md:max-mlg:h-auto w-[${pageWidth}] relative flex flex-col justify-center items-center place-content-centers p-10 sm:p-20 md:max-mlg:p-10`}
          >
            <h1 className={styles.subHeaderText}>Objectives of the Project</h1>
            <h1 className={styles.headerText}>Why Kiwinative?</h1>
            <div className="w-full flex flex-col sm:flex-row flex-wrap items-center mt-3">
              <div className="basis-full sm:basis-1/2 flex flex-row p-5 sm:p-10 items-center">
                <BsLightningFill size={65} className="text-orange-400" />
                <p className="pl-8 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="basis-1/2 flex flex-row p-5 sm:p-10">
                <BsFillPeopleFill className="text-green-500 text-[65px]" />
                <p className="pl-8 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="basis-1/2 flex flex-row p-5 sm:p-10">
                <BsFillShieldSlashFill size={65} className="text-green-500" />
                <p className="pl-8 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="basis-1/2 flex flex-row p-5 sm:p-10">
                <FaCoins size={65} className="text-[#ffd700]" />
                <p className="pl-8 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="basis-1/2 flex flex-row p-5 sm:p-10">
                <BsCurrencyExchange size={65} className="text-[#ffd700]" />
                <p className="pl-8 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>

          <div
            className={`h-auto w-[${pageWidth}] container-none flex flex-col justify-center items-center p-10 sm:p-20 md:max-mlg:p-10 lg:p-20`}
          >
            <h1 className={styles.subHeaderText}>
              Real-world uses of Kiwinative
            </h1>
            <h1 className={styles.headerText}>Ecosytem</h1>
            <div className="container-none flex flex-row flex-wrap items-center">
              <div className=" basis-full md:basis-2/5 md:max-mlg:basis-full p-4 m-10 bg-lightIndigo rounded-xl">
                <div className="container-none flex flex-row items-center">
                  <div className="basis-2/5">
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      01.
                    </h1>
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      AIRDROP
                    </h1>
                  </div>
                  <div className="basis-3/5 border-l-2 border-lightGreen p-3">
                    <p className="text-center text-darkWhite text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-full md:basis-2/5 md:max-mlg:basis-full  p-4 m-10 bg-lightIndigo rounded-xl">
                <div className="container-none flex flex-row items-center">
                  <div className="basis-2/5">
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      02.
                    </h1>
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      SPORTS
                    </h1>
                  </div>
                  <div className="basis-3/5 border-l-2 border-lightGreen p-3">
                    <p className="text-center text-white text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-full md:basis-2/5 md:max-mlg:basis-full  p-4 m-10 bg-lightIndigo rounded-xl">
                <div className="container-none flex flex-row items-center">
                  <div className="basis-2/5">
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      03.
                    </h1>
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      CASINO
                    </h1>
                  </div>
                  <div className="basis-3/5 border-l-2 border-lightGreen p-3">
                    <p className="text-center text-darkWhite text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-full md:basis-2/5 md:max-mlg:basis-full p-4 m-10 bg-lightIndigo rounded-xl">
                <div className="container-none flex flex-row items-center">
                  <div className="basis-2/5">
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      04.
                    </h1>
                    <h1 className="text-2xl font-bold text-center text-darkWhite">
                      MARKETPLACE
                    </h1>
                  </div>
                  <div className="basis-3/5 border-l-2 border-lightGreen p-3">
                    <p className="text-center text-darkWhite text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`h-auto w-[${pageWidth}] flex flex-col`}>
            <h1 className={styles.subHeaderText}>
              How much Kiwinative has been minted
            </h1>
            <h1 className={styles.headerText}>TOKENOMICS</h1>
            <div className="container-none flex flex-row items-center justify-evenly mt-8">
              <div className="flex flex-col items-center">
                <BsStack className="text-[#ffd700] text-[45px] sm:text-[65px]" />
                <h1 className="text-sm sm:text-2xl pt-2 font-bold text-center text-darkWhite">
                  BEP-20
                </h1>
                <h1 className="text-sm sm:text-xl text-center text-darkWhite">
                  BSC Token
                </h1>
              </div>
              <div className="flex flex-col items-center">
              <Image src={yellowLogo} alt="" className="text-[#ffd700] h-[45px] w-[55px] sm:h-[75px] sm:w-[75px] sm:text-[65px]" />
                {/* <BsCoin className="text-[#ffd700] text-[45px] sm:text-[65px]" /> */}
                <h1 className="text-sm sm:text-2xl pt-2 font-bold text-center text-darkWhite">
                  $KIWINATIVE
                </h1>
                <h1 className="text-sm sm:text-xl text-center text-darkWhite">
                  Utility Token
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <h1 className=" text-[40px] sm:text-7xl font-bold text-center text-green-500">
                  20B
                </h1>
                <h1 className=" text-sm sm:text-2xl pt-2 font-bold text-center text-darkWhite">
                  20 BILLION
                </h1>
                <h1 className=" text-sm sm:text-xl text-center text-darkWhite">
                  Total Supply
                </h1>
              </div>
            </div>
            <div className="h-[80vh] flex items-center justify-center mt-10">
              <DoughnutChart />
            </div>
          </div>

          <Roadmap />
          <Footer />
          <Blur/>
          <MobileMenu/>
        </div>
      </div>
    </div>
  );
};

export default Home;
