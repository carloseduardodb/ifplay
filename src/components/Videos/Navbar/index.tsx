import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import { useSearch } from "../../../hooks/useSearch";
import { useRouter } from "next/router";

const Navbar = () => {
  const { search, setSearch } = useSearch();
  const { push, query } = useRouter();

  return (
    <nav className="flex justify-center items-center w-full">
      <div className="container flex justify-between items-center">
        <div className="text-white flex w-8/12 py-3 px-10 my-5 justify-start row items-center bg-p-black-dark rounded-lg p-1">
          <FiSearch
            className="text-p-green bg-transparent -ml-5 mr-5"
            size={30}
          />
          <input
            className="py-1 rounded-r-lg font-normal text-base bg-transparent outline-none focus:border-transparent w-full"
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!query.entryMode) {
                push(`/playlists?entryMode=seeAllVideos`);
              }
            }}
          />
        </div>
        <Link href="/">
          <button className="bg-p-green rounded mr-5 text-white flex items-center pr-5 py-1">
            <FiChevronLeft size={45} className="" />
            Voltar
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
