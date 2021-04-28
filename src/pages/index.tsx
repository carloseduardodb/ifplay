import Head from "next/head";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="md:px-20">
      <Navbar />
      <Loading />
    </div>
  );
}
