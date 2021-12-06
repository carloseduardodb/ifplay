import React, { useEffect } from "react";
import { FiArchive, FiEdit3, FiPlay } from "react-icons/fi";
import CreateAnswerModal from "../../../../components/Dashboard/Modals/CreateAnswerModal";
import CreateVideosModal from "../../../../components/Dashboard/Modals/CreateVideosModal/index";
import EditPlaylistNameModal from "../../../../components/Dashboard/Modals/CreateQuizModal/index";
import CreateTeamModal from "../../../../components/Dashboard/Modals/CreateTeamModal/index";
import api from "../../../../services/api";
import { useRouter } from "next/router";
import { useDispatchGlobalEvent } from "../../../../hooks/useDispatchGlobalEvent";
import CardsVideos from "../../../../components/Dashboard/CardsVideos/index";
import CardsQuestions from "../../../../components/Dashboard/CardsQuestions/index";
import CardsTeams from "../../../../components/Dashboard/CardsTeams/index";
import StatusPlaylist from "../../../../components/Dashboard/StatusPlaylist";

const specific = ({ deviceType }) => {
  const [name, setName] = React.useState("");
  const router = useRouter();
  const { dispatch } = useDispatchGlobalEvent();

  useEffect(() => {
    api
      .get(`/teacher/quizzes/${router.query.quizId}`)
      .then((response) => {
        setName(response.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, router.query.quizId]);

  return (
    <>
      <div className="flex p-5 mb-10 mt-20 mx-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Cadastros</h2>
                <div className="flex flex-row flex-wrap justify-between gap-5">
                  <CreateAnswerModal />
                  <CreateVideosModal />
                  <CreateTeamModal />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full p-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold">Nome do questionário</h2>
                <h4 className="font-semibold my-2">{name}</h4>
                <div className="flex flex-row justify-end w-full flex-wrap gap-5">
                  <EditPlaylistNameModal />
                </div>
              </div>
            </div>
          </div>

          <StatusPlaylist />
        </div>
      </div>
      <div className="mx-16">
        <CardsVideos />
        <CardsQuestions />
        <CardsTeams />
      </div>
    </>
  );
};

export default specific;
