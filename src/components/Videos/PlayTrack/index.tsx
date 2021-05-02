import React from "react";
import ListVideos from "./ListVideos";
import PlayerVideo from "./PlayerVideo";
import PlayQuestions from "./PlayQuestions";

const PlayTrack = () => {
  return (
    <section
      style={{ height: "85vh" }}
      className="container my-5 flex justify-between"
    >
      <div className="w-8/12">
        <PlayerVideo />
      </div>
      <ListVideos />
    </section>
  );
};

export default PlayTrack;
