import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Search from "../../LandingPage/Search";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  function handleClickResponsiveButton() {
    if (menu) {
      return "flex md:flex-row xs:flex-col items-center";
    } else {
      return "flex md:flex-row xs:flex-col items-center xs:hidden";
    }
  }

  return (
    <>
      <nav>
        <ul className="flex flex-row items-center text-lg 2xl:text-2xl text-white font-normal justify-between sm:py-5 sm:p-5 xs:p-5 md:py-10 xs:flex-col-reverse">
          <div className={`${handleClickResponsiveButton()}`}>
            <li className="xs:pr-0 md:pr-10 2xl:pr-14 xs:my-5">
              <a href="#">
                <img
                  style={{ minWidth: "100px" }}
                  className="bg-cover w-48 xs:w-36 min-w-0"
                  src="./logo.svg"
                  alt="if(play)"
                />
              </a>
            </li>
            <li className="px-4 2xl:px-8 xs:pb-5 hover:text-p-yellow-light">
              <a href="#">Inicio</a>
            </li>
            <li className="px-4 2xl:px-8 xs:pb-5 hover:text-p-yellow-light">
              <a href="#">Categorias</a>
            </li>
            <li className="px-4 2xl:px-8 hover:text-p-yellow-light">
              <a href="#">Continuar Assistindo</a>
            </li>
          </div>
          <div className="flex flex-row-reverse justify-between xs:w-full w-max px-5">
            <button
              className="xs:block hidden relative mx-5"
              onClick={() => {
                openMenu(!menu);
              }}
            >
              <span className="bg-white absolute rounded-3xl h-0.5 w-8 -mt-3"></span>
              <span className="bg-white absolute rounded-3xl h-0.5 w-8"></span>
              <span className="bg-white absolute rounded-3xl h-0.5 w-8 my-3"></span>
            </button>
            <Search />
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
