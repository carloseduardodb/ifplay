import React, { FormEventHandler, useRef } from "react";
import InputText from "../../components/UI/InputText";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import getValidationsErrors from "../../utils/getValidationsErrors";
import * as Yup from "yup";
import Link from "next/link";
import Head from "next/head";
import api from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import Router from "next/router";
import { toast } from "react-toastify";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Register = () => {
  const formRef = useRef<FormHandles>(null);
  const { teacher } = useAuth();
  if (teacher) {
    Router.push("/dashboard");
  }
  async function sendData(data: RegisterData) {
    const status = await api
      .post("teacher/register", data)
      .then(() => {
        toast.success("Sucesso ao realizar seu cadastro!");
        return true;
      })
      .catch((err: Error) => {
        toast.error("Email já cadastrado no sistema!");
        return false;
      });
    return status;
  }

  function equalTo(ref, msg) {
    return this.test({
      name: "equalTo",
      exclusive: false,
      message: msg || "${path} must be the same as ${reference}",
      params: {
        reference: ref.path,
      },
      test: function (value) {
        return value === this.resolve(ref);
      },
    });
  }

  Yup.addMethod(Yup.string, "equalTo", equalTo);

  async function handleSubmit(data: RegisterData, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(6, "Mínimo de 6 caracteres para este campo!")
          .required("Este campo não pode ficar vazio!"),
        email: Yup.string()
          .email("É necessário um email válido!")
          .required("Este campo não pode ficar vazio!"),
        password: Yup.string()
          .required("Por Favor Adicione Sua Senha")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
            "Deve conter 8 caracteres, uma maiúscula, uma minúscula, um número e um caractere especial"
          ),
        // eslint-disable-next-line no-useless-escape
        repeatPassword: Yup.mixed().test(
          "match",
          "As senhas devem ser iguais",
          function (value) {
            return this.parent.password === value;
          }
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      const status = await sendData(data);
      status && reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }
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
                        name="name"
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
                        name="email"
                        id="email"
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
                          name="password"
                          value="gZUHD2%R!!zo"
                          className="block focus:scale-105 w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                          id="password"
                          type="password"
                          placeholder="Sua Senha"
                        />
                      </div>
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label className="text-base font-medium leading-relaxed text-white">
                          Repita sua senha
                        </label>
                        <InputText
                          name="repeatPassword"
                          value="gZUHD2%R!!zo"
                          className="block focus:scale-105 w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
                          id="repeatPassword"
                          type="password"
                          placeholder="Sua Senha"
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
