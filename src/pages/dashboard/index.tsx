import React from "react";
import { FaChevronDown } from "react-icons/fa";
import CardStats from "../../components/Dashboard/CardStats";
import CardTable from "../../components/Dashboard/CardTable";
import HeaderStats from "../../components/Dashboard/HeaderStats";
import PlaylistCard from "../../components/Dashboard/PlaylistCard";

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
