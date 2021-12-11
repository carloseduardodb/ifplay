import React from "react";
import ListVideos from "./ListVideos";
import PlayerVideo from "./PlayerVideo";
import PlayQuestions from "./PlayQuestions";
import { usePlaylist } from "../../../hooks/usePlaylist";

const PlayTrack = () => {
  const { isQuestions } = usePlaylist();
  return (
    <section
      style={{ height: "85vh" }}
      className="container my-5 flex justify-between"
    >
      <div className="w-8/12">
        {!isQuestions ? <PlayerVideo /> : <PlayQuestions />}
      </div>
      <ListVideos />
    </section>
  );
};

export default PlayTrack;
