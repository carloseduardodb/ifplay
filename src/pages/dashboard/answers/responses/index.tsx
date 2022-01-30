import React, { useEffect } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../../../services/api";
import { toast } from "react-toastify";

type ResponseProps = {
  student: string;
  email: string;
  acertos: number;
  erros: number;
};

const index = () => {
  const router = useRouter();
  const [responses, setResponses] = React.useState([]);
  useEffect(() => {
    if (router.query.playlistId && router.query.teamId) {
      api
        .get(
          `/playlists/${router.query.playlistId}/teams/${router.query.teamId}/responses`
        )
        .then(({ data }) => {
          setResponses(data[0]);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }, [router.query]);

  return (
    <section className="antialiased bg-p-black-dark text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full relative">
        <Link href="/dashboard/answers">
          <a
            className="bg-p-green p-5 rounded-full left-0"
            style={{ width: "max-content" }}
          >
            <FiChevronsLeft size={30} className="text-white" />
          </a>
        </Link>
        <h1 className="text-center text-3xl font-semibold text-white mb-10">
          Respostas
        </h1>
        <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Alunos</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Nome</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Acertos</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Erros</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {responses.map((response: ResponseProps) => (
                    <tr key={response.email}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {response.student}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{response.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {response.acertos}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">
                          {response.erros}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
