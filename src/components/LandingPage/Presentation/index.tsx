import React from "react";
import { FiArrowDown } from "react-icons/fi";

const Presentation = () => {
  return (
    <div
      className="text-center flex flex-col items-center justify-around relative top-0 gap-y-56 my-20"
    >
      <img
        style={{ zIndex: -1 }}
        className="absolute opacity-20"
        src="./studying.svg"
        width="70%"
        alt="Pessoa estudando"
      />
      <h2 className="text-4xl 2xl:5xl text-white font-bold">
        Estude quando e onde quiser!
      </h2>
      <a
        href="#HowItWorks"
        className="bg-p-green text-white p-3 rounded-md flex items-center shadow-md hover:bg-opacity-80 transition-all animate-bounce"
      >
        Quero Saber Mais
        <FiArrowDown size={25} className="ml-1" />
      </a>
    </div>
  );
};

export default Presentation;
