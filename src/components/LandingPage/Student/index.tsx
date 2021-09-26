import Link from "next/link";
import React from "react";

const Student = () => {
  return (
    <section className="mb-10 md:mb-0" id="student">
      <h2 className="text-3xl font-bold text-white text-center my-20">
        Comece a estudar agora!
      </h2>
      <div className="flex flex-col md:flex-row-reverse justify-around items-center">
        <img src="./studentquiz.svg" alt="" className="w-6/12" />
        <ul className="text-white text-lg">
          <li>
            <span className="text-p-green font-bold mr-2">1º</span> Visualize as
            trilhas de video.
          </li>
          <li>
            <span className="text-p-green font-bold mr-2">2º</span> No final das
            trilhas responda as perguntas.
          </li>
          <li>
            <span className="text-p-green font-bold mr-2">3º</span> Escolha
            enviar ou não suas respostas para o professor.
          </li>
          <li>
            <span className="text-p-green font-bold mr-2">4º</span> Volte a
            assistir de onde parou quando voltar.
          </li>
          <Link href="videos">
            <div className="text-center">
              <button className="bg-p-green mt-10 rounded px-5 py-3 hover:bg-opacity-80 transition-all">
                Quero começar a estudar
              </button>
            </div>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Student;
