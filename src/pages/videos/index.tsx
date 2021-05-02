import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import Navbar from "../../components/Videos/Navbar";
import Footer from "../../components/UI/Footer";
import PlayTrack from "../../components/Videos/PlayTrack";
import InfiniteVideos from "../../components/Videos/InfiniteVideos";

const Videos = () => {
  return (
    <div className="md:px-20 flex flex-col justify-center items-center">
      <Navbar /> <PlayTrack /> <InfiniteVideos />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Videos;
