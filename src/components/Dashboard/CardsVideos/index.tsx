import { useRouter } from "next/router";
import React, { useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

type VideoProps = {
  id: number;
  playlist_id: number;
  url: string;
  views: number;
};

const CardsVideos = () => {
  const [videos, setVideos] = React.useState<VideoProps[]>([]);
  const router = useRouter();
  const { dispatch, setDispatch } = useDispatchGlobalEvent();

  useEffect(() => {
    console.log(router.query.quizId);
    api
      .get(`teacher/${router.query.quizId}/videos`)
      .then((response) => {
        setVideos(response.data);
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
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-md p-5 mb-10 w-96">
            <label htmlFor="" className="font-semibold">
              Nome do video
            </label>
            <p>Ainda indefinido</p>
            <br />
            <label htmlFor="" className="font-semibold">
              Url:
            </label>
            <br />
            <a className="text-blue-500" href={video.url}>
              {video.url}
            </a>
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

export default CardsVideos;
