import React from "react";
import CardTable from "../../components/Dashboard/CardTable";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import Admin from "../../layouts/Admin";

export default function Dashboard() {
  return (
    <>
      <Admin>
        <div className="flex flex-wrap -mt-10">
          <div className="w-full mb-12 px-4">
            <CardTable />
          </div>
        </div>
      </Admin>
    </>
  );
}
