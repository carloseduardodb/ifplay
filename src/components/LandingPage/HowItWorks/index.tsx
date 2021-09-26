import React from "react";
import { GiTeacher } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section
      id="HowItWorks"
      className="flex flex-col items-center gap-y-20 justify-center mt-36 2xl:pt-44"
    >
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-white text-3xl font-bold my-3">
          Primeiro precisamos saber quem você é
        </h2>
        <span className="text-p-yellow-light font-light text-sm text-center">
          Não se preocupe as perguntas param por aqui!
        </span>
      </div>
      <img
        className="w-5/12"
        src="./studyingorteacher.svg"
        alt="duas pessoas estudando"
      />
      <div className="flex flex-col gap-y-5 sm:flex-row justify-between md:w-5/12 gap-x-10">
        <a href="#teacher" className="bg-p-green py-3 md:py-5 px-4 md:px-7 text-white rounded-lg flex items-center hover:bg-opacity-80 transition-all">
          <GiTeacher className="mr-2" color="white" />
          Sou um professor
        </a>
        <a href="#student" className="bg-p-blue text-white py-3 md:py-5 px-4 md:px-7 rounded-lg flex items-center hover:bg-opacity-80 transition-all">
          <FaUserGraduate className="mr-2" />
          Sou um aluno
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
