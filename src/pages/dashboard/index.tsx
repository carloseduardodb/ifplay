import React from "react";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Admin from "../../layouts/Admin";

export default function Dashboard() {
  return (
    <>
      <Admin>
        <div className="">
          <p className="text-white">A new posting message</p>
        </div>
      </Admin>
    </>
  );
}
