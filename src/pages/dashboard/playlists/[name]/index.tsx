import React from "react";
import { FiArchive, FiEdit3, FiPlay } from "react-icons/fi";
import CreateAnswerModal from "../../../../components/Dashboard/Modals/CreateAnswerModal";
import CreateVideosModal from "../../../../components/Dashboard/Modals/CreateVideosModal/index";
import CreateQuizModal from "../../../../components/Dashboard/Modals/CreateQuizModal/index";
import CreateTeamModal from "../../../../components/Dashboard/Modals/CreateTeamModal/index";

const specific = () => {
  return (
    <>
      <div className="flex p-5 mb-10 mt-20 mx-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Cadastros</h2>
                <div className="flex flex-row flex-wrap justify-between gap-5">
                  <CreateAnswerModal />
                  <CreateVideosModal />
                  <CreateTeamModal />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Nome do questionário</h2>
                <h4 className="font-semibold my-2">Questionário sem nome</h4>
                <div className="flex flex-row justify-end w-full flex-wrap gap-5">
                  <CreateQuizModal />
                  <button className="flex p-1 rounded-full items-center justify-center font-semibold leading-none text-white bg-p-green hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none">
                    <FiEdit3 size={40} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Questões</h2>
                <ul className="flex justify-between mt-5 font-bold">
                  <li className="flex flex-row flex-wrap justify-between items-center gap-5">
                    <FiPlay className="text-p-green-dark" size={32} />
                    {`Videos Cadastrados (58)`}
                  </li>
                  <li className="flex flex-row flex-wrap justify-between items-center gap-5">
                    <FiArchive className="text-p-green-dark" size={32} />
                    {`Questões Cadastradas (58)`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16">
        <div className="">
          <h2 className="text-2xl text-white font-bold">Videos</h2>
          <br />
          <div className="bg-white rounded-md p-5 mb-10 w-96">
            <label htmlFor="" className="font-semibold">
              Nome do video
            </label>
            <p>Não sei o nome</p>
            <br />
            <label htmlFor="" className="font-semibold">
              Url:
            </label>
            <br />
            <a
              className="text-blue-500"
              href="https://www.youtube.com/watch?v=V3-dcP81lBQ"
            >
              https://www.youtube.com/watch?v=V3-dcP81lBQ
            </a>
            <div className="flex justify-end">
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-p-blue text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Editar
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl text-white font-bold">Questões</h2>
          <br />
          <div className="bg-white rounded-md p-5 mb-10 w-96">
            <label htmlFor="" className="font-semibold">
              Titulo da questão
            </label>
            <p>Não sei o nome</p>
            <br />
            <label htmlFor="" className="font-semibold">
              Alternativas
            </label>
            <br />
            <p>a) Todas as Respostas</p>
            <p className="font-bold text-green-700">b) Todas as Respostas</p>
            <p>c) Todas as Respostas</p>
            <p>d) Todas as Respostas</p>
            <div className="flex justify-end">
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-p-blue text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Editar
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl text-white font-bold">Turmas</h2>
          <br />
          <div className="bg-white rounded-md p-5 mb-10 w-96">
            <label htmlFor="" className="font-semibold">
              Nome da turma
            </label>
            <p>Primeiro ano 1</p>
            <br />
            <label htmlFor="" className="font-semibold">
              Código da turma:
            </label>
            <p>125</p>
            <div className="flex justify-end">
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-p-blue text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Editar
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border 
                          border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium 
                        text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default specific;