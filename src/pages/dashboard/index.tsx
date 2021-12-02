import React, { useEffect } from "react";
import { FiAperture } from "react-icons/fi";
import CardTable from "../../components/Dashboard/CardTable";
import HeaderStats from "../../components/Dashboard/HeaderStats";
import RecentVideos from "../../components/LandingPage/RecentVideos/index";
import Video from "../../components/UI/Video";

export default function Dashboard() {
  return (
    <>
      <div className="bg-white w-4/12 rounded-md p-5 mb-10 mt-20 mx-7">
        <label htmlFor="" className="font-semibold">
          Nome do video
        </label>
        <p>Não sei o nome</p>
        <br />
        <label htmlFor="" className="font-semibold">
          Url
        </label>
        <p>url de um video</p>
      </div>
      <div className="flex min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Cadastros</h2>
                <div className="flex flex-row flex-wrap justify-between gap-5">
                  <button className="flex items-center mt-9 w-5/12 font-semibold leading-none text-white py-4 px-10 bg-p-green rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none">
                    <FiAperture size={40} />
                    Cadastrar Perguntas
                  </button>
                  <button className="flex items-center mt-9 w-5/12 font-semibold leading-none text-white py-4 px-10 bg-p-green rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none">
                    <FiAperture size={40} />
                    Cadastrar Respostas
                  </button>
                  <button className="flex items-center mt-9 w-5/12 font-semibold leading-none text-white py-4 px-10 bg-p-green rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none">
                    <FiAperture size={40} />
                    Cadastrar Videos
                  </button>
                  <button className="flex items-center mt-9 w-5/12 font-semibold leading-none text-white py-4 px-10 bg-p-green rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-p-green focus:outline-none">
                    <FiAperture size={40} />
                    Cadastrar Turmas
                  </button>
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
                <div className="flex flex-row flex-wrap justify-between gap-5"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Questões</h2>
                <div className="flex flex-row flex-wrap justify-between gap-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  /*return (
    <>
      <HeaderStats />
      <div className="relative pb-16 xs:pb-1 -top-8">
        <div className="px-4 md:px-16 mx-auto w-full">
          <CardTable />
        </div>
      </div>
    </>
  );*/
}
