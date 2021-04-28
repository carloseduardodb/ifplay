import React from "react";

const Teacher = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="my-5 text-3xl text-white font-bold mb-10">
        Falta apenas um passo entre você e um novo mundo para seus pupilos!
      </h1>
      <div className="flex justify-around items-center">
        <img
          src="./iteacher.svg"
          alt="Uma pessoa assistindo uma aula online"
          className="w-6/12"
        />
        <ul className="text-white mt-10 text-lg">
          <li>
            <span className="text-p-yellow font-bold mr-2">1º</span> Você
            precisa fazer o seu cadastro ou o login clicando{" "}
            <a href="#" className="font-bold rounded text-p-yellow">
              aqui
            </a>
          </li>
          <li className="my-5">
            <span className="text-p-yellow font-bold mr-2">2º</span> Você poderá
            adicionar playlists de videos para seus alunos. <br />
          </li>
          <li>
            <span className="text-p-yellow font-bold mr-2">3º</span>
            Adicione perguntas no final de cada trilha para fixar o
            conhecimento.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Teacher;
