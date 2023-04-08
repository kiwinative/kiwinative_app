"use client";
import React, {Component} from "react";
import "../dist/main.css";
import { GlobalContextProvider } from "./Context/store";
import Head from "next/head";

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
</head>
      <body className="scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700 overflow-x-hidden font-poppins">
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
