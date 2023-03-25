"use client";
import "../dist/main.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div className="absolute">
          <Header />
        </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
