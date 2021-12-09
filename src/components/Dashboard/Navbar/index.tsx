import React, { useEffect } from "react";
import UserDropdown from "../UserDropdown";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  useEffect(() => {
    switch (search) {
      case "Dashboard":
        router.push("/dashboard");
        break;
      case "Playlists":
        router.push("/dashboard/playlists");
        break;
      case "Respostas":
        router.push("/dashboard/responses");
        break;
      case "Atualizar Perfil":
        router.push("/dashboard/update-profile");
        break;
      case "Configurações":
        router.push("/dashboard/settings");
        break;
      default:
        break;
    }
  }, [search]);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search">
                  <FaSearch />
                </i>
              </span>
              <input
                list="routes"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquise aqui..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
              <datalist id="routes">
                <option value="Dashboard" />
                <option value="Playlists" />
                <option value="Respostas" />
                <option value="Atualizar Perfil" />
                <option value="Configurações" />
              </datalist>
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
