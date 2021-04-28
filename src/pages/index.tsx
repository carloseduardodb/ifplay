import Head from "next/head";
import Apresentation from "../components/Apresentation";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Student from "../components/Student";
import Teacher from "../components/Teacher";

export default function Home() {
  return (
    <div className="md:px-20">
      <Navbar />
      <Apresentation />
      <HowItWorks />
      <Teacher />
      <Student />
    </div>
  );
}
