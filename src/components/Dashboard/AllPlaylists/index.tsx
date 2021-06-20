import React from "react";
import PlaylistCard from "../PlaylistCard";

const AllPlaylists = () => {
  return (
    <section className="grid grid-flow-row xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 2xl:grid-cols-3 mx-16 mb-16 lg:gap-x-16 gap-y-8">
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
    </section>
  );
};

export default AllPlaylists;
