import React from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";

const UpdateProfile = () => {
  const [email, setEmail] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const handleSubmitUpdateEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // envia o email e novo email para o backend
    api
      .put("/teacher/email", {
        email,
        newEmail,
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handleSubmitUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // envia a senha e a nova senha para o backend para atualização
    api
      .put("/teacher/password", {
        password,
        newPassword,
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="min-h-screen pt-2 font-mono my-16">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-white font-semibold my-5">
              Atualização do perfil
            </h2>
            <form className="mt-6 border-t border-gray-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6 mt-5">
                <form
                  onSubmit={handleSubmitUpdateEmail}
                  className="bg-p-black w-full p-5 rounded-md"
                >
                  <div className="w-full md:w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-text-1"
                    >
                      Seu email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
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
                      Novo email
                    </label>
                    <input
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="appearance-none block w-full bg-white  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-text-1"
                      type="text"
                      placeholder="Seu novo email"
                      required
                    />
                  </div>
                  <div className="flex justify-end w-full">
                    <button
                      onClick={() => handleSubmitUpdateEmail}
                      className="appearance-none bg-p-green text-gray-900 px-3 py-2 shadow-sm border border-gray-400 rounded-md mr-3 transform hover:scale-x-105"
                      type="submit"
                    >
                      Modificar Email
                    </button>
                  </div>
                </form>
                <br />
                <form
                  onSubmit={handleSubmitUpdatePassword}
                  className="bg-p-black w-full p-5 rounded-md my-10"
                >
                  <div className="w-full md:w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      htmlFor="grid-text-1"
                    >
                      Senha atual
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
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
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="appearance-none block w-full bg-white  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-text-1"
                      type="text"
                      placeholder="Sua nova senha"
                      required
                    />
                  </div>
                  <div className="flex justify-end w-full">
                    <button
                      onClick={() => handleSubmitUpdatePassword}
                      className="appearance-none bg-red-500 text-gray-100 px-3 py-2 shadow-sm border border-gray-400 rounded-md mr-3 transform hover:scale-x-105"
                      type="submit"
                    >
                      Modificar Senha
                    </button>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
