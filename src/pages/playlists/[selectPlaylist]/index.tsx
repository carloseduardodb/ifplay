import React from "react";
import Navbar from "../../../components/Videos/Navbar";
import Footer from "../../../components/UI/Footer/index";
import InfiniteVideos from "../../../components/Videos/InfiniteVideos";
import PlayTrack from "../../../components/Videos/PlayTrack/index";

const index = () => {
  return (
    <div className="md:px-20 2xl:px-52 flex flex-col justify-center items-center">
      <Navbar /> <PlayTrack />
      <InfiniteVideos />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
