"use client";
import React from "react";
import SideNav from "@/components/SideNav";
import Home from "@/components/Home";

const HomePage = () => {
  return (
    <div className="flex">
      <SideNav />
      <Home />
    </div>
  );
};
export default HomePage;
