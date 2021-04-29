import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const Video = () => {
  return (
    <div className="relative m-5">
      <div className="absolute flex flex-col justify-between items-center rounded-t w-full h-full">
        <p className="text-white font-bold bg-black bg-opacity-80 py-3 px-4 w-full text-center overflow-ellipsis whitespace-nowrap overflow-hidden">
          Tailwind CSS Tutorial #15 - Hover Effects
        </p>
        <a href="" className="absolute top-1/2 transform -translate-y-1/2">
          <FaPlay size={50} className="hover:text-p-green" />
        </a>
        <div className="rounded bg-p-green text-white absolute bottom-0 mb-2 mr-2 w-full shadow-lg">
          <a
            href="#"
            className="flex items-center text-sm py-1 px-2 my-1 rounded text-white w-full text-center"
          >
            Ver Descrição <FiArrowRight className="ml-2" />
          </a>
        </div>
        <div></div>
      </div>
      <img
        className="rounded"
        src="https://images.unsplash.com/photo-1619446058193-de9ab42a5331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        alt=""
      />
    </div>
  );
};

export default Video;
