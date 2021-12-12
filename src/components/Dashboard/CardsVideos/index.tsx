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

type VideoProps = {
  id: number;
  playlist_id: number;
  url: string;
  views: number;
  title: string;
};

const CardsVideos = () => {
  const [videos, setVideos] = React.useState<VideoProps[]>([]);
  const router = useRouter();
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const [currentIndex, setSlide] = useState(0);

  useEffect(() => {
    if (router.query.quizId !== undefined)
      api
        .get(`teacher/${router.query.quizId}/videos`)
        .then((response) => {
          setVideos(response.data);
        })
        .catch((error) => {
          toast.error("Erro ao carregar os vídeos");
        });
  }, [router.query, dispatch]);

  return (
    <div className="">
      <h2 className="text-2xl text-white font-bold">Videos Cadastrados</h2>
      <br />
      <div className={`mt-5 relative ${videos.length > 2 && "justify-center"}`}>
        <Carousel
          showThumbs={false}
          centerMode
          centerSlidePercentage={100 / 2}
          showIndicators={false}
          width="100%"
          selectedItem={currentIndex}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <button
              className={`bg-p-green absolute bottom-32 z-10 left-2 hover:bg-p-green text-white font-semibold hover:text-white py-3 px-1 border border-p-green hover:border-transparent rounded ${
                !hasPrev && "hidden"
              }`}
              onClick={() => {
                onClickHandler();
                setSlide((currentIndex - 3 + videos.length) % videos.length);
              }}
              disabled={!hasPrev}
            >
              <FiChevronLeft size={25} />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <button
              className={`bg-p-green absolute bottom-32 right-2 hover:bg-p-green text-white font-semibold hover:text-white py-3 px-1 border border-p-green hover:border-transparent rounded ${
                !hasNext && "hidden"
              }`}
              onClick={() => {
                onClickHandler();
                setSlide((currentIndex + 3) % videos.length);
              }}
              disabled={!hasNext}
            >
              <FiChevronRight size={25} />
            </button>
          )}
        >
          {videos.map((video) => (
            <UniqueRender key={video.id} video={video} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardsVideos;
