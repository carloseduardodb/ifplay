import Head from "next/head";
import Presentation from "../components/LandingPage/Presentation";
import HowItWorks from "../components/LandingPage/HowItWorks";
import RecentTracks from "../components/LandingPage/RecentTracks";
import RecentVideos from "../components/LandingPage/RecentVideos";
import SeeAllVideos from "../components/LandingPage/SeeAllVideos";
import Student from "../components/LandingPage/Student";
import Teacher from "../components/LandingPage/Teacher";
import Footer from "../components/UI/Footer";
import Navbar from "../components/LandingPage/Navbar";
import YouWantCookies from "../components/UI/YouWantCookies";

export default function Home() {
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="px-10">
        <Head>
          <title>IF (PLAY)</title>
        </Head>
        <Navbar />
        <Presentation />
        <HowItWorks />
        <Teacher />
        <Student />
        <RecentTracks />
        <RecentVideos />
        <SeeAllVideos />
        <Footer />
        <YouWantCookies />
      </div>
    </div>
  );
}
