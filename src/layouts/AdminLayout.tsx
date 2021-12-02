import React, { ReactNode } from "react";
import Head from "next/head";
import Sidebar from "../components/Dashboard/Sidebar/index";
import FooterAdmin from "../components/Dashboard/Footer/index";
import Navbar from "../components/Dashboard/Navbar";

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>IF (PLAY) - Dashboard</title>
      </Head>
      <Sidebar />
      <div className="relative md:ml-64 flex flex-col min-h-screen justify-between">
        <div className="flex flex-col">
          <Navbar />
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
