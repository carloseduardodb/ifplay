import React from "react";
import { FaChevronDown } from "react-icons/fa";

const PlaylistCard = () => {
  return (
    <div className="bg-white p-5 relative rounded-sm">
      <FaChevronDown className="absolute right-0 mr-5" size={25} />
      <h4 className="text-center mb-5 font-bold text-xl">
        Geometria Analitica
      </h4>
      <section className="flex flex-row justify-between">
        <div className="flex flex-col gap-y-3 w-96 relative -left-12 text-right text-white justify-center">
          <span className="bg-p-black px-5 py-1 rounded-sm">5 videos</span>
          <span className="bg-p-black px-5 py-1 rounded-sm">10 questões</span>
          <span className="bg-red-500 px-5 py-1 rounded-sm">5 turmas</span>
          <span className="bg-red-500 px-5 py-1 rounded-sm">63 respostas</span>
        </div>
        <div>
          <img width={350} className="p-2" src="/playlist.svg" />
        </div>
      </section>
      <div className="text-right">
        <button className="bg-blue-500 px-4 py-1 rounded text-white">
          Gerenciar
        </button>
      </div>
    </div>
  );
};

export default PlaylistCard;
