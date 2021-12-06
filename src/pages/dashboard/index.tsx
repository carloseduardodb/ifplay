import React from "react";
import { useState } from "react";
import HeaderStats from "../../components/Dashboard/HeaderStats/index";
import CardTable from "../../components/Dashboard/CardTable/index";

type WhichModal = {
  status: boolean;
  name: string;
};

export default function Dashboard() {
  const [open, setOpen] = useState<WhichModal>({ status: false, name: "" });
  const handleViewModal = (name: string) => {
    setOpen({ status: true, name: name });
  };

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
