import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import Navbar from "../../components/Videos/Navbar";
import Footer from "../../components/UI/Footer";
import PlayTrack from "../../components/Videos/PlayTrack";
import InfiniteVideos from "../../components/Videos/InfiniteVideos";
import { useRouter } from "next/router";
import { useEffect } from "react";
import InfinitePlaylists from "../../components/Videos/InfinitePlaylists";

const Playlist = () => {
  const router = useRouter();
  const [isInfinity, setIsInfinity] = React.useState(false);
  useEffect(() => {
    if (router.query.entryMode === "seeAllVideos") {
      setIsInfinity(false);
    }
  }, []);
  return (
    <div className="md:px-20 2xl:px-52 flex flex-col justify-center items-center">
      <Navbar /> {isInfinity && <PlayTrack />} <InfinitePlaylists />{" "}
      <InfiniteVideos />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Playlist;
