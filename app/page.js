"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNav />
        <Home />
      </div>
    </>
  );
};
export default HomePage;
