import { useRouter } from "next/router";
import React, { useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

type Alternatives = {
  id: number;
  question_id: number;
  is_response: boolean;
  title: string;
};

type QuestionProps = {
  id: number;
  quiz_id: number;
  title: string;
  alternatives: Alternatives[];
};

const CardsQuestions = () => {
  const [questions, setQuestions] = React.useState<QuestionProps[]>([]);
  const router = useRouter();
  const { dispatch } = useDispatchGlobalEvent();
  const [currentIndex, setSlide] = useState(0);

  useEffect(() => {
    if (router.query.quizId !== undefined)
      api
        .get(`teacher/${router.query.quizId}/questions`)
        .then((response) => {
          setQuestions(response.data);
        })
        .catch((error) => {
          alert(error);
        });
  }, [router.query, dispatch]);
  return (
    <div className="">
      <h2 className="text-2xl text-white font-bold">Questões Cadastradas</h2>
      <br />
      <div
        className={`mt-5 relative ${questions.length > 2 && "justify-center"}`}
      >
        <Carousel
          centerMode
          centerSlidePercentage={33.33}
          showIndicators={false}
          width="100%"
          selectedItem={currentIndex}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              className={`bg-p-green absolute bottom-14 z-10 left-2 hover:bg-p-green text-white font-semibold hover:text-white py-3 px-1 border border-p-green hover:border-transparent rounded ${
                !hasPrev && "hidden"
              }`}
              onClick={() => {
                onClickHandler();
                setSlide(
                  (currentIndex - 3 + questions.length) % questions.length
                );
              }}
              disabled={!hasPrev}
            >
              <FiChevronLeft size={25} />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              className={`bg-p-green absolute bottom-14 right-2 hover:bg-p-green text-white font-semibold hover:text-white py-3 px-1 border border-p-green hover:border-transparent rounded ${
                !hasNext && "hidden"
              }`}
              onClick={() => {
                onClickHandler();
                setSlide((currentIndex + 3) % questions.length);
              }}
              disabled={!hasNext}
            >
              <FiChevronRight size={25} />
            </button>
          )}
        >
          {questions.map((question) => (
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
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardsQuestions;
