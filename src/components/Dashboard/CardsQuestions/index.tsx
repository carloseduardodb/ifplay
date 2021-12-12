import { useRouter } from "next/router";
import React, { useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import UniqueRender from "./UniqueRender";

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
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const [currentIndex, setSlide] = useState(0);

  useEffect(() => {
    if (router.query.quizId !== undefined)
      api
        .get(`teacher/${router.query.quizId}/questions`)
        .then((response) => {
          setQuestions(response.data);
          setDispatch(!dispatch);
        })
        .catch((error) => {
          toast.error(error);
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
          showThumbs={false}
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
            <UniqueRender key={question.id} question={question} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardsQuestions;
