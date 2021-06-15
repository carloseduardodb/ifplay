import React from "react";
import DetailsVideoList from "./DetailsVideoList";
import DetailsQuestions from "./DetailsQuestions";

const ListVideos = () => {
  return (
    <ul className="w-4/12 overflow-hidden scrollbar scrollbar-thumb-p-green scrollbar-thin scrollbar-track-gray-800">
      <DetailsVideoList selected />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsVideoList />
      <DetailsQuestions />
    </ul>
  );
};

export default ListVideos;
