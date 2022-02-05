import React from "react";

const Footer = () => {
  return (
    <section className="md:absolute w-full md:left-0 md:bg-p-green">
      <section className="md:rounded-tl-full bg-p-black-dark w-full left-0 px-11 md:px-52 h-auto pt-20 md:pt-52">
        <div className="flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-0">
          <h2 className="text-3xl text-white text-center">
            Investir em conhecimento rende <br /> sempre os melhores juros!
          </h2>
          <a
            href="mailto:carloseduardodiasbatista@gmail.com"
            style={{ height: "max-content" }}
            className="px-8 py-4 rounded-l-full rounded-br-full bg-p-green text-white shadow-2xl hover:shadow-lg hover:opacity-95"
          >
            Contate-nos
          </a>
        </div>
        <hr className="my-10" />
        <div className="py-5 gap-y-5 md:py-10 flex flex-col md:flex-row justify-between items-center">
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
            className="bg-p-yellow-light p-3 rounded w-32"
            src="./ifsuldeminaslogo.png"
            alt="ifsuldeminas"
          />
        </div>
      </section>
    </section>
  );
};

export default Footer;
