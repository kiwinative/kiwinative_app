"use client";
import "../dist/main.css";
import { GlobalContextProvider } from "./Context/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700 overflow-x-hidden">
        {/* <div className="absolute">
          <Header />
        </div> */}
        <GlobalContextProvider>{children}</GlobalContextProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
