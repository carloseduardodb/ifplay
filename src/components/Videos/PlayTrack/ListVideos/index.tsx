import React, { useEffect } from "react";
import DetailsVideoList from "./DetailsVideoList";
import DetailsQuestions from "./DetailsQuestions";
import api from "../../../../services/api";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { usePlaylist } from "../../../../hooks/usePlaylist";

const ListVideos = () => {
  const [videos, setVideos] = React.useState([]);
  const router = useRouter();
  const { playlist } = usePlaylist();
  const [select, setSelect] = React.useState("");

  return (
    <ul className="w-4/12 overflow-hidden scrollbar scrollbar-thumb-p-green scrollbar-thin scrollbar-track-gray-800">
      {playlist?.videos?.map((video) => (
        <DetailsVideoList url={video.url} />
      ))}
    </ul>
  );
};

export default ListVideos;
