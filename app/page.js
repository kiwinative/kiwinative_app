"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { MenuProvider } from "@/components/Contexts";

const HomePage = () => {
  return (
    <>
      <MenuProvider>
        <Header />
        <div className="flex flex-row">
          <div className="w-[20vw]">
            <SideNav />
          </div>
          <div className="w-[80vw] bg-darkIndigo">
            <Home />
          </div>
        </div>
      </MenuProvider>
    </>
  );
};
export default HomePage;
