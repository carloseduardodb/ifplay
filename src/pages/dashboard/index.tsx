import React, { useEffect } from "react";
import CardTable from "../../components/Dashboard/CardTable";
import HeaderStats from "../../components/Dashboard/HeaderStats";

export default function Dashboard() {
  return (
    <>
      <HeaderStats />
      <div className="relative pb-16 xs:pb-1 -top-8">
        <div className="px-4 md:px-16 mx-auto w-full">
          <CardTable />
        </div>
      </div>
    </>
  );
}
