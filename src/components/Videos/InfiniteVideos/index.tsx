import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import api from "../../../services/api";
import Video from "../../UI/Video";

type VideosProps = {
  created_at: Date;
  id: number;
  playlist_id: number;
  teacher_id: number;
  updated_at: Date;
  url: string;
  views: number;
};

const InfiniteVideos = () => {
  const [videos, setVideos] = React.useState<VideosProps[]>([]);
  useEffect(() => {
    api
      .get("video/all")
      .then(({ data }: AxiosResponse) => {
        setVideos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <p className="w-full text-3xl text-white font-bold mt-5 flex items-center">
        <FaPlus size={20} className="text-p-yellow-light mx-3" /> Mais videos
      </p>
      <div className="w-full grid xs:grid-cols-1 2xl:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 mb-10">
        {videos.map((video) => (
          <Video effects={false} data={video} key={video.id} />
        ))}
      </div>
    </>
  );
};

export default InfiniteVideos;
