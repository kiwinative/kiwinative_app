"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { useGlobalContext } from "./Context/store";

const HomePage = () => {
  const { pageWidth } = useGlobalContext();

  return (
    <>
      <Header />
      <div className="flex flex-row bg-darkIndigo overflow-x-hidden">
        <div className={`hidden md:block w-[20vw]`}>
          <SideNav />
        </div>

        <div className={`w-[100vw] md:w-[${pageWidth}] bg-darkIndigo`}>
          <Home />
        </div>
      </div>
    </>
  );
};
export default HomePage;
