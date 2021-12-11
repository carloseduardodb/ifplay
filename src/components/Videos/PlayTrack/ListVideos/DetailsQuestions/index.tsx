import React from "react";
import { usePlaylist } from "../../../../../hooks/usePlaylist";

interface detailsQuestion {
  selected?: Boolean;
}

const DetailsQuestions: React.FC<detailsQuestion> = ({ selected = false }) => {
  const { playlist, setIsQuestions } = usePlaylist();
  if (playlist)
    return (
      <li onClick={() => setIsQuestions(true)}>
        <a
          href="#"
          className={`flex mx-5 shadow-lg mb-2 rounded p-2 bg-p-green bg-opacity-70 ${
            selected ? "border-p-yellow-light border-2 shadow-2xl" : ""
          }`}
        >
          <img
            className="bg-contain w-24 h-16 border-2 border-p-black-dark shadow-lg"
            src="https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="É bom colocar no banco a descrição a thumbnail"
          />
          <div className="px-2 py-1">
            <h3 className="text-white font-bold">Questões...</h3>
            <p className="text-white text-xs opacity-70">
              Um total de {playlist.questions.length} questões foram adicionadas
              nesta playlist ...
            </p>
          </div>
        </a>
      </li>
    );
  return <></>;
};

export default DetailsQuestions;
