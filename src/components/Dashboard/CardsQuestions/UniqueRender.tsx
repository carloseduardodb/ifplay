import React from "react";
import DeleteModal from "../Modals/DeleteModal/index";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

const UniqueRender = ({ question }) => {
  const { setDispatch, dispatch } = useDispatchGlobalEvent();

  const handleDelete = (event) => {
    event.preventDefault();
    api
      .delete(`teacher/playlist/question/${question.id}`)
      .then((response) => {
        toast.success("Sucesso ao apagar item!");
        setDispatch(!dispatch);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div key={question.id}>
      <div className="bg-white rounded-md p-5 mb-10 mx-2 text-left max-h-72 overflow-y-scroll">
        <label htmlFor="" className="font-semibold">
          Titulo da questão
        </label>
        <p>{question.title}</p>
        <br />
        <label htmlFor="" className="font-semibold">
          Alternativas
        </label>
        <br />
        {question.alternatives.map((alternative) => {
          return (
            <p
              key={alternative.id}
              className={`${
                alternative.is_response && "font-bold text-green-700"
              }`}
            >
              {alternative.title}
            </p>
          );
        })}
        <div className="flex justify-end mt-5">
          <DeleteModal handleSubmit={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default UniqueRender;
