import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

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

const Video: React.FC<videoProperties> = ({ effects = true, data }) => {
  const [description, isDescription] = useState(false);
  const [videoProps, setVideoProps] = useState<Root>();

  function handleDescriptionView() {
    isDescription(!description);
  }

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
        data.url
      )}&key=AIzaSyA1NpAPjo2rXcj7dRxKwqj9JtlX_P-v0HA%20&part=snippet`
    )
      .then((res) => res.json())
      .then((data: Root) => setVideoProps(data));
  }, [data]);

  return (
    <div className="relative m-5">
      <div
        className={`absolute flex flex-col justify-between items-center rounded-t w-full h-full ${
          effects && "opacity-0"
        } hover:opacity-100 transition-all duration-1000`}
      >
        <a
          href="#"
          className={`text-white font-bold bg-black bg-opacity-80 py-3 px-4 w-full text-center overflow-ellipsis whitespace-nowrap overflow-hidden hover:text-p-green ${
            description ? "opacity-0" : "opacity-100"
          }`}
        >
          {videoProps?.items[0].snippet.title}
        </a>
        <a
          href=""
          className={`absolute top-1/2 transform -translate-y-1/2 text-yellow-300 ${
            description ? "opacity-0" : "opacity-100"
          }`}
        >
          <FaPlay size={50} className="hover:text-p-green" />
        </a>
        <div
          className={`rounded text-white absolute bottom-0 mb-2 mr-2 w-full shadow-lg ${
            !description ? "bg-p-green" : "bg-p-yellow"
          } z-10`}
        >
          <button
            onClick={() => {
              handleDescriptionView();
            }}
            className="flex items-center text-sm py-1 px-2 my-1 rounded text-white w-full text-center hover:text-black focus:outline-none"
          >
            {!description ? "Ver Descrição" : "Voltar"}{" "}
            <FiArrowRight className="ml-2" />
          </button>
        </div>
        <div
          className={`${
            !description ? "hidden" : "block"
          } w-full h-full bg-p-purple absolute z-0 rounded p-5 text-xs text-white shadow-2xl drop-shadow-md`}
        >
          <h3 className="mb-2 text-p-yellow-light font-bold">Descrição:</h3>
          {videoProps?.items[0].snippet.description}
        </div>
      </div>
      <img
        className="rounded"
        src={videoProps?.items[0].snippet.thumbnails.standard.url}
        alt=""
      />
    </div>
  );
};

export default Video;
