import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import Navbar from "../../components/PlayTrack/Navbar";
import PlayerVideo from "../../components/PlayTrack/PlayerVideo";

const PlayTrack = () => {
  return (
    <div className="md:px-20">
      <Navbar /> <PlayerVideo />
    </div>
  );
};

export default PlayTrack;
