import React from "react";
import { FiCheck } from "react-icons/fi";
import { usePlaylist } from "../../../../../../hooks/usePlaylist";

interface Response {
  questionId: number;
  alternaId: number;
  response: boolean;
}

const index = () => {
  const {
    questionPosition,
    playlist,
    nextPosition,
    setQuestionStatusScreen,
    addResponseQuestions,
  } = usePlaylist();
  const [response, setResponse] = React.useState<Response>({
    questionId: 0,
    alternaId: 0,
    response: false,
  });

  const direction = () => {
    addResponseQuestions(
      response.questionId,
      response.alternaId,
      response.response
    );
    if (questionPosition === playlist.questions.length) {
      setQuestionStatusScreen("finally");
    } else {
      nextPosition();
    }
  };

  return (
    <div className="">
      <div className="mb-5">
        <h3 className="text-p-green font-bold">
          Questão {questionPosition}/{playlist.questions.length}
        </h3>
      </div>
      <h1 className="bg-white rounded-md p-5">
        {playlist.questions[questionPosition - 1].title}
      </h1>
      <br />
      <div className="flex flex-col">
        <ul className="flex flex-col gap-y-4">
          {playlist.questions[questionPosition - 1].alternatives.map(
            (alternative) => (
              <li
                key={alternative.id}
                onClick={() => {
                  setResponse({
                    questionId: playlist.questions[questionPosition - 1].id,
                    alternaId: alternative.id,
                    response: !!alternative.is_response,
                  });
                }}
                className="bg-white flex justify-between items-center p-4 rounded-2xl transform hover:scale-x-105 hover:bg-p-green hover:text-white cursor-pointer transition-transform ease-in-out duration-300"
              >
                <p>{alternative.title}</p>
                {response.alternaId === alternative.id && (
                  <FiCheck size={23} className="text-p-green-dark" />
                )}
              </li>
            )
          )}
        </ul>
        <div className="text-right mt-5 mr-3">
          <button
            onClick={() => direction()}
            className="px-5 py-3 rounded-sm bg-p-green uppercase text-white tracking-widest transition-transform ease-in-out duration-300 transform hover:scale-x-110"
          >
            Proxima Pergunta
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
