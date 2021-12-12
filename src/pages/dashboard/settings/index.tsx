import React from "react";
import { toast } from "react-toastify";
import DeleteAccountModal from "../../../components/Dashboard/Modals/DeleteAccountModal";
import api from "../../../services/api";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";

const Settings = () => {
  const { push } = useRouter();
  const { signOut } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .delete("/teacher")
      .then((res) => {
        toast.success(res.data.message);
        signOut();
        push("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div className="mt-28 mb-28 px-40">
      <h2 className="text-2xl text-white font-bold">Configurações</h2>
      <br />
      <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">Apagar Conta</div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                Esta ação é irreversível e apagará todos os videos e turmas
                criadas.
              </p>
            </div>
          </div>
          <DeleteAccountModal handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
