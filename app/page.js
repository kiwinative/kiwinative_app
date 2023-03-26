"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="w-[20vw]">
          <SideNav />
        </div>
        <div className="w-[80vw]">
          <Home />
        </div>
      </div>
    </>
  );
};
export default HomePage;
