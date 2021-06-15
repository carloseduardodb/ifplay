import React from "react";
import HeaderStats from "../../components/Dashboard/HeaderStats";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Footer from "../../components/Dashboard/Footer";

// components

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 flex flex-col min-h-screen justify-between">
        <div className="flex flex-col">
          <Navbar />
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full">{children}</div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
