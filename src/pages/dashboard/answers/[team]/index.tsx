import React from "react";
import HeaderStatsPlaylists from "../../../../components/Dashboard/HeaderStatsPlaylists/index";
import ResponsesCardsTeams from "../../../../components/Dashboard/ResponsesCardsTeams";

const index = () => {
  return (
    <>
      <HeaderStatsPlaylists />
      <div className="w-full lg:-mt-4 px-5 mx-auto items-center justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <br />
        <ResponsesCardsTeams />
        <br />
      </div>
    </>
  );
};

export default index;
