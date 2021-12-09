import React from "react";

const UpdateProfile = () => {
  return (
    <>
      <div className="min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-white font-semibold my-5">
              Atualização do perfil
            </h2>
            <form className="mt-6 border-t border-gray-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Seu email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Senha atual
                  </label>
                  <input
                    className="appearance-none block w-full bg-white  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Sua senha"
                    required
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    Nova senha
                  </label>
                  <input
                    className="appearance-none block w-full bg-white  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Sua nova senha"
                    required
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Sua senha
                  </label>
                  <button className="appearance-none bg-red-600 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    Trocar Senha
                  </button>
                </div>
                <div className="flex justify-end w-full">
                  <button
                    className="appearance-none bg-p-green text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="submit"
                  >
                    Salvar alterações
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
