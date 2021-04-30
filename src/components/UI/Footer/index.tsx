import React from "react";

const Footer = () => {
  return (
    <section className="absolute w-full left-0 bg-p-green">
      <section className="rounded-tl-full bg-p-black-dark w-full left-0 px-52 h-auto pt-52">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl text-white text-center">
            Investir em conhecimento rende <br /> sempre os melhores juros!
          </h2>
          <button
            style={{ height: "max-content" }}
            className="px-8 py-4 rounded-l-full rounded-br-full bg-p-green text-white shadow-2xl hover:shadow-lg hover:opacity-95"
          >
            Contate-nos
          </button>
        </div>
        <hr className="my-10" />
        <div className="py-10 flex justify-between">
          <ul>
            <li>
              <p className="text-white">Trabalho de conclusão de curso.</p>
            </li>
            <li className="mt-2 text-xs text-p-blue-light">
              Desenvolvido por Carlos Eduardo Dias Batista
            </li>
          </ul>
          <ul className="flex gap-x-8 text-white">
            <li>
              <a href="#" className="hover:text-p-green">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-p-green">
                Termos de Serviço
              </a>
            </li>
          </ul>
          <img
            className="bg-p-yellow-light p-3 rounded"
            src="./ifsuldeminaslogo.png"
            width="15%"
            alt="ifsuldeminas"
          />
        </div>
      </section>
    </section>
  );
};

export default Footer;
