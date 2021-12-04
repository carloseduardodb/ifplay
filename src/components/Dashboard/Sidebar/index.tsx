import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaList,
  FaReplyAll,
  FaSortNumericUp,
  FaPenNib,
  FaWrench,
} from "react-icons/fa";

import NotificationDropdown from "../NotificationDropdown";
import UserDropdown from "../UserDropdown";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import api from "../../../services/api";
import { useState } from "react";

type Props = {
  created_at: Date;
  id: number;
  quiz_id: number;
  name: string;
  teacher_id: number;
  updated_at: Date;
};

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();

  const [playlists, setPlaylists] = useState<Props[]>([]);
  const { dispatch } = useDispatchGlobalEvent();
  useEffect(() => {
    api
      .get("teacher/playlist")
      .then((response) => {
        setPlaylists(response.data.playlists);
      })
      .catch((err) => {
        alert("Erro ao carregar playlists");
      });
  }, [dispatch]);
  return (
    <>
      <nav
        className="
      md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto 
      md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-p-purple-dark 
      flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6
      "
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap 
        px-0 flex flex-wrap items-center justify-between w-full mx-auto
        "
        >
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-3 
            py-1 text-xl leading-none bg-transparent rounded border border-solid 
            border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-p-purple-dark m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link href="/dashboard">
            <a
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 
              inline-block whitespace-nowrap text-sm uppercase font-bold p-4 
              px-0"
            >
              <img
                style={{ minWidth: "50px" }}
                className="bg-cover w-32 xs:w-24 min-w-0"
                src="/logo.svg"
                alt="IF(PLAY)"
              />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">{`<UserDropdown />`}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div
              className="md:min-w-full md:hidden block pb-4 mb-4 border-b 
            border-solid border-blueGray-200"
            >
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#"
                      className="md:block text-left md:pb-2 text-white 
                      mr-0 inline-block whitespace-nowrap text-sm uppercase 
                      font-bold p-4 px-0"
                    >
                      IFPLAY
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-white opacity-50 md:hidden 
                    px-3 py-1 text-xl leading-none bg-transparent rounded border 
                    border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  
                  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 
                  bg-white rounded text-base leading-snug shadow-none outline-none 
                  focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6
              className="md:min-w-full text-white text-md uppercase font-bold 
            block pt-1 pb-4 no-underline"
            >
              Administrar
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname === "/dashboard"
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-blueGray-500")
                    }
                  >
                    <i className={"fas fa-tv mr-2 text-sm"}>
                      <FaTachometerAlt />
                    </i>{" "}
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>

              <li className="items-center mt-2">
                <Link href="/dashboard/playlists">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname.indexOf("/dashboard/playlists") !== -1
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-p-green")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/dashboard/playlists") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    >
                      <FaList />
                    </i>{" "}
                    <span>Playlists</span>
                  </a>
                </Link>
                {router.pathname.indexOf("/dashboard/playlists") !== -1 ? (
                  <ul className="flex flex-col gap-y-3 mt-3 font-light text-sm">
                    {playlists.map((playlist) => (
                      <li key={playlist.id}>
                        <Link
                          href={{
                            pathname: `/dashboard/playlists/${playlist.name}`,
                            query: {
                              quizId: playlist.quiz_id,
                            },
                          }}
                        >
                          <a
                            href="#"
                            className={`text-white ml-8 hover:text-p-green ${
                              router.pathname.includes(
                                `/dashboard/playlists/[name]`
                              )
                                ? "text-p-green"
                                : ""
                            }`}
                          >
                            {playlist.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="items-center mt-2">
                <Link href="/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname.indexOf("/dashboard/questionaries") !==
                      -1
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-p-green")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    >
                      <FaReplyAll />
                    </i>{" "}
                    <span>Respostas</span>
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-white text-md uppercase font-bold block pt-1 pb-4 no-underline">
              Sua Conta
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center mt-2">
                <Link href="/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname.indexOf("/dashboard/questionaries") !==
                      -1
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-p-green")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    >
                      <FaSortNumericUp />
                    </i>{" "}
                    <span>Estatisticas do Perfil</span>
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname.indexOf("/dashboard/questionaries") !==
                      -1
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-p-green")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    >
                      <FaPenNib />
                    </i>{" "}
                    <span>Atualizar Perfil</span>
                  </a>
                </Link>
              </li>
              <li className="items-center mt-2">
                <Link href="/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 px-4 font-bold flex flex-row" +
                      (router.pathname.indexOf("/dashboard/questionaries") !==
                      -1
                        ? "text-light text-white bg-p-green rounded hover:text-light"
                        : "text-light text-white hover:text-p-green")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    >
                      <FaWrench />
                    </i>{" "}
                    <span>Configurações</span>
                  </a>
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
