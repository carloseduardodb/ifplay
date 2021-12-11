import React from "react";
import { usePlaylist } from "../../../../../../hooks/usePlaylist";
import api from "../../../../../../services/api";

const index = () => {
  const { setQuestionStatusScreen, responses } = usePlaylist();
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [name, setName] = React.useState("");

  const handleClickSend = () => {
    if (!email || !code || !name) {
      alert("Preencha os campos!");
      return;
    }
    api.post("questions/answer", {
      responses,
      email,
      name,
      code,
    });
  };

  return (
    <div>
      <h1 className="text-center text-white uppercase tracking-widest font-semibold text-lg">
        Enviar respostas para um professor
      </h1>
      <div className="flex flex-col items-center justify-center mt-4">
        <br />
        <div className="mb-6">
          <label
            htmlFor="turma"
            className="block mb-2 text-sm text-white dark:text-gray-400 mb-3"
          >
            Entre com o código da sua turma
          </label>
          <input
            onChange={(e) => setCode(e.target.value)}
            type="text"
            name="turma"
            id="turma"
            placeholder="d616cf07-6719-436b-b0f9-5ab675496dc5"
            required
            className="w-full px-3 py-2 bg-p-green placeholder-gray-700 text-black border border-p-green-dark rounded-md focus:outline-none focus:ring focus:ring-p-green-dark  focus:border-p-green-dark "
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-white dark:text-gray-400 mb-3"
          >
            Entre com seu email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-white dark:text-gray-400 mb-3"
          >
            Entre com seu nome
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="alexander"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div className="my-2 flex flex-col w-96">
          <div className="my-2">
            <button
              onClick={() => {
                handleClickSend();
              }}
              className="uppercase bg-p-yellow w-full py-3 rounded-md font-semibold text-lg transform transition-transform ease-in-out duration-300 hover:scale-x-105"
            >
              Enviar
            </button>
          </div>
          <div className="my-2">
            <button
              onClick={() => setQuestionStatusScreen("responses")}
              className="uppercase bg-p-green py-3 w-full rounded-md font-semibold text-lg transform transition-transform ease-in-out duration-300 hover:scale-x-105"
            >
              Ver Resultado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
