import React from "react";
import DeleteModal from "../Modals/DeleteModal/index";
import api from "../../../services/api";
import { toast } from "react-toastify";
import EditAnswerModal from "../Modals/EditAnswerModal/index";

const UniqueRender = ({ question }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    api
      .delete(`teacher/playlist/question/${question.id}`)
      .then((response) => {
        toast.success("Sucesso ao apagar item!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div key={question.id}>
      <div className="bg-white rounded-md p-5 mb-10 w-96 text-left">
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
                alternative.is_response ?? "font-bold text-green-700"
              }`}
            >
              {alternative.title}
            </p>
          );
        })}
        <div className="flex justify-end">
          <EditAnswerModal />
          <DeleteModal handleSubmit={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default UniqueRender;
