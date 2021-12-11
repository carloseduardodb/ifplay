import React from "react";
import { usePlaylist } from "../../../../../../hooks/usePlaylist";

const index = () => {
  const { resetPlaylist, verifyResponses } = usePlaylist();
  const { errors, hits, total } = verifyResponses();
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ minHeight: "80%" }}
    >
      <br />
      <div className="bg-white py-4 w-full text-center rounded-md">
        <p>
          Voce acertou {hits} de um total de {total} perguntas
        </p>
      </div>
      <br />
      <button
        onClick={resetPlaylist}
        className="px-5 py-3 bg-p-green rounded-md uppercase"
      >
        Assistir playlist novamente
      </button>
      <br />
      <br />
      <div className="w-6/12">
        <cite className="text-center text-sm text-white">
          "Conserve os olhos fixos num ideal sublime e lute sempre pelo que
          deseja, pois só os fracos desistem e só quem luta é digno de vida."{" "}
          <br />- Desconhecido
        </cite>
      </div>
    </div>
  );
};

export default index;
