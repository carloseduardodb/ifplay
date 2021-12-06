import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FiArchive, FiPlay } from "react-icons/fi";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

type PropsRequest = {
  questions: number;
  videos: number;
};

const StatusPlaylist = () => {
  const router = useRouter();
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const [request, setRequest] = React.useState<PropsRequest>();

  useEffect(() => {
    if (router.query.quizId !== undefined)
      api
        .get(`teacher/${router.query.quizId}/count-items`)
        .then((response) => {
          setRequest(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [router.query, dispatch]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full p-3">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold">Questões</h2>
          <ul className="flex justify-between mt-5 font-bold">
            <li className="flex flex-row flex-wrap justify-between items-center gap-5">
              <FiPlay className="text-p-green-dark" size={32} />
              {`Videos Cadastrados ${request?.videos}`}
            </li>
            <li className="flex flex-row flex-wrap justify-between items-center gap-5">
              <FiArchive className="text-p-green-dark" size={32} />
              {`Questões Cadastradas ${request?.questions}`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatusPlaylist;
