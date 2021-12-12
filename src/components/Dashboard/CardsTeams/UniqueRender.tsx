import React from "react";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import DeleteModal from "../Modals/DeleteModal/index";
import EditTeamModal from "../Modals/EditTeamModal";

const UniqueRender = ({ team }) => {
  const { setDispatch, dispatch } = useDispatchGlobalEvent();
  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .delete(`teacher/playlist/team/${team.id}`)
      .then((data) => {
        toast.success("Item apagado com sucesso!");
        setDispatch(!dispatch);
      })
      .catch((err) => {
        toast.error("Erro ao apagar item!");
      });
  };

  return (
    <div key={team.id}>
      <div className="bg-white rounded-md p-5 mb-10 w-96 text-left">
        <label htmlFor="" className="font-semibold">
          Nome da turma:
        </label>
        <p>{team.name}</p>
        <br />
        <label htmlFor="" className="font-semibold">
          Código da turma:
        </label>
        <p>{team.code}</p>
        <br />
        <div className="flex justify-end">
          <EditTeamModal />
          <DeleteModal handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UniqueRender;
