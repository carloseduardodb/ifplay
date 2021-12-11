import React, { useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import CardDropDown from "../CardDropDown/index";
import Link from "next/link";
import { toast } from "react-toastify";

type Props = {
  created_at: Date;
  id: number;
  name: string;
  quizId: number;
  teacherId: number;
  updated_at: Date;
  quantity: { videos: 6; questions: 5; teams: 5; answers: 0 };
};

const ResponsesAllPlaylists = () => {
  const [playlists, setPlaylists] = React.useState<Props[]>([]);
  const { dispatch } = useDispatchGlobalEvent();
  useEffect(() => {
    api
      .get("teacher/count-items")
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((err) => {
        toast.error("Erro ao carregar playlists");
      });
  }, [dispatch]);

  return (
    <section className="grid grid-flow-row xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 2xl:grid-cols-3 mx-16 mb-16 lg:gap-x-16 gap-y-8">
      {playlists?.map((playlist) => (
        <div key={playlist.id} className="bg-white p-5 relative rounded-sm">
          <h4 className="text-center mb-5 font-bold text-xl">
            {playlist.name}
          </h4>
          <section className="flex flex-row justify-between">
            <div className="flex flex-col gap-y-3 w-96 relative -left-12 text-right text-white justify-center">
              <span className="bg-p-black px-5 py-1 rounded-sm">
                {playlist.quantity.videos} videos
              </span>
              <span className="bg-p-black px-5 py-1 rounded-sm">
                {playlist.quantity.questions} questões
              </span>
              <span className="bg-red-500 px-5 py-1 rounded-sm">
                {playlist.quantity.teams} turmas
              </span>
              <span className="bg-red-500 px-5 py-1 rounded-sm">
                {playlist.quantity.answers} respostas
              </span>
            </div>
            <div>
              <img width={350} className="p-2" src="/playlist.svg" />
            </div>
          </section>
          <div className="text-right">
            <Link
              href={{
                pathname: `/dashboard/answers/${playlist.name}`,
                query: {
                  playlistId: playlist.quizId,
                },
              }}
            >
              <a className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white">
                Selecionar
              </a>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResponsesAllPlaylists;
