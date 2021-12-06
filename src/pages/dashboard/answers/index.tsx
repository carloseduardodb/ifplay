import React from "react";
import ResponsesAllPlaylists from "../../../components/Dashboard/ResponsesAllPlaylists/index";
import HeaderStatsPlaylists from "../../../components/Dashboard/HeaderStatsPlaylists/index";

const responses = () => {
  return (
    <>
      <HeaderStatsPlaylists />
      <div className="w-full lg:-mt-4 px-5 mx-auto items-center justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <br />
        <br />
        <h1 className="text-xl font-semibold text-white">
          Selecione uma Playlist
        </h1>
        <br />
        <ResponsesAllPlaylists />
      </div>
    </>
  );
};

export default responses;
