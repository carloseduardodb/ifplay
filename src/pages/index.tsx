import Head from "next/head";
import Apresentation from "../components/LandingPage/Apresentation";
import HowItWorks from "../components/LandingPage/HowItWorks";
import RecentTracks from "../components/LandingPage/RecentTracks";
import RecentVideos from "../components/LandingPage/RecentVideos";
import SeeAllVideos from "../components/LandingPage/SeeAllVideos";
import Student from "../components/LandingPage/Student";
import Teacher from "../components/LandingPage/Teacher";
import Footer from "../components/UI/Footer";
import Navbar from "../components/UI/Navbar";
import YouWantCookies from "../components/UI/YouWantCookies";

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
      <SeeAllVideos />
      <Footer />
      <YouWantCookies />
    </div>
  );
}
