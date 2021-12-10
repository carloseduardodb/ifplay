import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { usePlaylist } from "../../../../../hooks/usePlaylist";

type VideosProps = {
  created_at: Date;
  id: number;
  playlist_id: number;
  teacher_id: number;
  updated_at: Date;
  url: string;
  views: number;
};
interface videoProperties {
  effects?: Boolean;
  data?: VideosProps;
}

interface Root {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

interface Default {
  url: string;
  width: number;
  height: number;
}

interface Medium {
  url: string;
  width: number;
  height: number;
}

interface High {
  url: string;
  width: number;
  height: number;
}

interface Standard {
  url: string;
  width: number;
  height: number;
}

interface Maxres {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
interface detailsVideo {
  url?: string;
}

const DetailsVideoList: React.FC<detailsVideo> = ({ url = "", ...rest }) => {
  const [videoProps, setVideoProps] = useState<Root>();
  const { setSelectPlaylist, selectPlaylist } = usePlaylist();

  //uma funcao que puxa o id do video do youtube usando a url
  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${getId(
        url
      )}&key=AIzaSyA1NpAPjo2rXcj7dRxKwqj9JtlX_P-v0HA%20&part=snippet`
    )
      .then((res) => res.json())
      .then((data: Root) => setVideoProps(data));
  }, [url]);

  return (
    <li
      {...rest}
      onClick={() => {
        setSelectPlaylist(url);
      }}
    >
      <a
        href="#"
        className={`flex mx-5 shadow-lg mb-2 rounded p-2 bg-p-black items-center ${
          selectPlaylist === url
            ? "border-p-yellow-light border-2 shadow-2xl"
            : ""
        }`}
      >
        <img
          className="bg-contain w-36 h-full border-2 border-p-black-dark shadow-lg"
          src={videoProps?.items[0].snippet.thumbnails.high.url}
          alt="É bom colocar no banco a descrição a thumbnail"
        />
        <div className="px-2 py-1 text-sm">
          <h3 className="text-white font-bold">
            {videoProps?.items[0]?.snippet.title}
          </h3>
          <p className="text-white text-xs opacity-70">
            {videoProps?.items[0]?.snippet.description.substring(0, 100) +
              "..."}
          </p>
        </div>
      </a>
    </li>
  );
};

export default DetailsVideoList;
