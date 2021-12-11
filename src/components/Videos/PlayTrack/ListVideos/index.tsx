import React from "react";
import DetailsVideoList from "./DetailsVideoList";
import DetailsQuestions from "./DetailsQuestions";
import { useRouter } from "next/router";
import { usePlaylist } from "../../../../hooks/usePlaylist";

const ListVideos = () => {
  const [videos, setVideos] = React.useState([]);
  const router = useRouter();
  const { playlist } = usePlaylist();
  const [select, setSelect] = React.useState("");

  return (
    <ul
      className="w-4/12 overflow-hidden scrollbar scrollbar-thumb-p-green scrollbar-thin max-h-80 scrollbar-track-gray-800"
      style={{ maxHeight: "80%" }}
    >
      {playlist?.videos?.map((video) => (
        <DetailsVideoList key={video.id} url={video.url} />
      ))}
      <DetailsQuestions />
    </ul>
  );
};

export default ListVideos;
