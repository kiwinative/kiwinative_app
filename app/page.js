"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { useGlobalContext } from "./Context/store";

const HomePage = () => {
  const { pageWidth, sidenavWidth } = useGlobalContext();

  return (
    <>
      <Header />
      <div className="flex flex-row bg-darkIndigo overflow-x-hidden">
        {/* <div className={`w-0 md:w-[${sidenavWidth}]`}> */}
        <div className={`w-[20vw]`}>
          <SideNav />
        </div>

        <div className={`w-[${pageWidth}] bg-darkIndigo`}>
          <Home />
        </div>
      </div>
    </>
  );
};
export default HomePage;
