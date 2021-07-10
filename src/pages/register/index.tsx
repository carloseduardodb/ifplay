import React, { useRef } from "react";
import InputText from "../../components/UI/InputText";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import Link from "next/link";
import Head from "next/head";

const Register = () => {
  const formRef = useRef<FormHandles>(null);
  function handleSubmit() {}
  return (
    <div>
      <Head>
        <title>IF (PLAY) - Register</title>
      </Head>
      <section className="flex flex-col items-center h-screen md:flex-row">
        <div className="container mx-auto">
          <div className="flex justify-center px-2 py-6 ">
            <div className="flex justify-around w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
              <div className="relative w-full h-auto bg-p-yellow-light bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                <div className="flex flex-col justify-around h-full relative z-10 p-12 text-left ">
                  <h2 className="mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                    Crie sua conta.
                  </h2>
                  <div className="w-full mt-11 mb-8 text-base leading-relaxed text-black opacity-90 sm:md:w-3/3 lg:text-1xl ">
                    <img src="./register.svg" alt="login" />
                  </div>
                </div>
              </div>
              <div className="w-full px-8 py-24 bg-p-black-dark border-gray-100 rounded-lg lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                <div className="relative z-10 text-left py-5">
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-base font-medium leading-relaxed text-white">
                        Seu Nome
                      </label>
                      <InputText
                        type="text"
                        name="04"
                        id=""
                        placeholder="Seu Nome"
                        className="w-full focus:scale-105 px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-base font-medium leading-relaxed text-white">
                        Endereço de Email
                      </label>
                      <InputText
                        type="email"
                        name="05"
                        id=""
                        placeholder="Seu Email"
                        className="w-full focus:scale-105 px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                        required
                      />
                    </div>
                    <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base font-medium leading-relaxed text-white">
                          Senha
                        </label>
                        <InputText
                          name="06"
                          className="block focus:scale-105 w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                          id="password"
                          type="text"
                          placeholder="Sua Senha"
                        />
                        <p className="mt-1 text-xs italic text-white opacity-60">
                          Por favor preencha este campo
                        </p>
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label className="text-base font-medium leading-relaxed text-white">
                          Confirmação
                        </label>
                        <input
                          className="block focus:scale-105 w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500 "
                          id="confirm"
                          type="text"
                          placeholder="Confirmação"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 mt-6 font-semibold text-white bg-p-blue hover:scale-105 transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                    >
                      Cadastrar
                    </button>
                  </Form>
                  <p className="mt-8 text-center text-white">
                    Você ja tem uma conta?{" "}
                    <Link href="/login">
                      <a
                        href="#"
                        className="font-semibold text-p-yellow-light hover:text-p-yellow"
                      >
                        Fazer Login
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
