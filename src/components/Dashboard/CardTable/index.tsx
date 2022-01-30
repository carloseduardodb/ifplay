import React, { useEffect } from "react";
import PropTypes from "prop-types";

// components
import { FiX } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import api from "../../../services/api";
import { toast } from "react-toastify";

type lastResponse = {
  name: string;
  question_id: number;
  teacher_id: number;
  status: string;
  email: string;
  errors: number;
  hits: number;
};

type StatsProps = {
  responsesCount: number;
  emailsCount: number;
  playlistsCount: number;
  answersCount: number;
  lastResponses: lastResponse[];
};

type ResponseProps = {
  student: string;
  email: string;
  acertos: number;
  erros: number;
};

export default function CardTable({ color }) {
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const [stats, setStats] = React.useState<StatsProps>({} as StatsProps);
  const [responses, setResponses] = React.useState([]);

  useEffect(() => {
    api
      .get("/teacher/items/count")
      .then((response) => {
        setStats(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [dispatch]);

  useEffect(() => {
    api
      .get("/playlists/teams/responses/last")
      .then(({ data }) => {
        setResponses(data[0]);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "" : "text-white")
                }
              >
                Últimas Respostas
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Nomes
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Emails
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Acertos
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Erros
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {responses.map((response: ResponseProps) => (
                <tr key={response.email}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-800 px-4">
                        {response.student}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left px-4">{response.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg font-medium text-green-500 px-4 flex items-center gap-x-1">
                      {response.acertos}
                      <FaCheck size={18} />
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg px-4 text-red-500 flex items-center gap-x-1">
                      {response.erros}
                      <FiX size={18} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
