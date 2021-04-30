import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Video = () => {
  const [description, isDescription] = useState(false);

  function handleDescriptionView() {
    isDescription(!description);
  }

  return (
    <div className="relative m-5">
      <div className="absolute flex flex-col justify-between items-center rounded-t w-full h-full opacity-0 hover:opacity-100 transition-all duration-1000">
        <a
          href="#"
          className={`text-white font-bold bg-black bg-opacity-80 py-3 px-4 w-full text-center overflow-ellipsis whitespace-nowrap overflow-hidden hover:text-p-green ${
            description ? "opacity-0" : "opacity-100"
          }`}
        >
          Tailwind CSS Tutorial #15 - Hover Effects
        </a>
        <a
          href=""
          className={`absolute top-1/2 transform -translate-y-1/2 ${
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </div>
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
