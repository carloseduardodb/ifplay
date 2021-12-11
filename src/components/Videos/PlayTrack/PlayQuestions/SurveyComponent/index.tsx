import React from "react";
import { usePlaylist } from "../../../../../hooks/usePlaylist";

const index = () => {
  const { playlist, setQuestionStatusScreen } = usePlaylist();
  return (
    <div>
      <h1 className="text-center text-2xl text-p-green-light font-semibold tracking-wider mb-8">
        {playlist.quiz.title}
      </h1>
      <br />
      <div className="flex flex-row justify-center">
        <img
          src="/question.svg"
          className="w-96"
          alt="Aluno apoiado em uma questão"
        />
      </div>
      <br />
      <div className="text-right mr-14">
        <button
          onClick={() => setQuestionStatusScreen("question")}
          className="px-5 py-3 rounded-sm bg-p-green uppercase text-white tracking-widest transition-transform ease-in-out duration-300 transform hover:scale-x-110"
        >
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default index;
