import React from "react";
import { FaPlus } from "react-icons/fa";
import Video from "../../UI/Video";

const InfiniteVideos = () => {
  return (
    <>
      <p className="w-full text-3xl text-white font-bold mt-5 flex items-center">
        {" "}
        <FaPlus size={20} className="text-p-yellow-light mx-3" /> Mais videos
      </p>
      <div className="w-full grid xs:grid-cols-1 2xl:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 mb-10">
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
        <Video effects={false} />
      </div>
    </>
  );
};

export default InfiniteVideos;
