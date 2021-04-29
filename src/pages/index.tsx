import Head from "next/head";
import Apresentation from "../components/LandingPage/Apresentation";
import HowItWorks from "../components/LandingPage/HowItWorks";
import RecentTracks from "../components/LandingPage/RecentTracks";
import RecentVideos from "../components/LandingPage/RecentVideos";
import Student from "../components/LandingPage/Student";
import Teacher from "../components/LandingPage/Teacher";
import Navbar from "../components/UI/Navbar";

export default function Home() {
  return (
    <div className="md:px-20">
      <Navbar />
      <Apresentation />
      <HowItWorks />
      <Teacher />
      <Student />
      <RecentTracks />
      <RecentVideos />
    </div>
  );
}
