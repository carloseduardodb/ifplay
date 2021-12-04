import { useRouter } from "next/router";
import React, { useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

type QuestionProps = {
  id: number;
  title: string;
  alternative1: string;
  alternative2: string;
  alternative3: string;
  alternative4: string;
  responses: {
    alternative1: boolean;
    alternative2: boolean;
    alternative3: boolean;
    alternative4: boolean;
  };
};

const CardsQuestions = () => {
  const [questions, setQuestions] = React.useState<QuestionProps[]>([]);
  const router = useRouter();
  const { dispatch, setDispatch } = useDispatchGlobalEvent();

  useEffect(() => {
    console.log(router.query.quizId);
    api
      .get(`teacher/${router.query.quizId}/questions`)
      .then((response) => {
        setQuestions(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [router.query, dispatch]);
  return (
    <div className="">
      <h2 className="text-2xl text-white font-bold">Videos Cadastrados</h2>
      <br />
      <div className="flex gap-5 flex-wrap mt-5 justify-center">
        {questions.map((question) => (
          <div key={question.id} className="bg-white rounded-md p-5 mb-10 w-96">
            <label htmlFor="" className="font-semibold">
              Nome do video
            </label>
            <p>Ainda indefinido</p>
            <br />
            <label htmlFor="" className="font-semibold">
              Url:
            </label>
            <br />
            <a className="text-blue-500" href=""></a>
            <div className="flex justify-end">
              <button
                className="w-full inline-flex justify-center rounded-md border 
                        border-transparent shadow-sm px-4 py-2 bg-p-blue text-base font-medium 
                      text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                      focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Editar
              </button>
              <button
                className="w-full inline-flex justify-center rounded-md border 
                        border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium 
                      text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                      focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Apagar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsQuestions;
