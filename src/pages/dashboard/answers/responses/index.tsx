import React, { useEffect } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../../../services/api";

type ResponseProps = {
  name: string;
  email: string;
  hits: number;
  errors: number;
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
        .then((response) => {
          setResponses(response.data);
        });
    }
  }, [router.query]);

  return (
    <section className="antialiased bg-p-black-dark text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full relative">
        <Link href="/dashboard/answers">
          <a className="bg-p-green p-5 rounded-full absolute left-0">
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
                  {responses !== undefined ??
                    responses.map((response: ResponseProps) => (
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {response.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{response.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {response.hits}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center">
                            {response.errors}
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
