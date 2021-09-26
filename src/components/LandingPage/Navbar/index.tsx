import React, { useState } from "react";
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
        <ul className="flex flex-row items-center text-md 2xl:text-2xl text-white font-normal justify-between sm:py-5 sm:p-5 xs:p-5 md:py-10 xs:flex-col-reverse">
          <div className={`${handleClickResponsiveButton()} gap-x-5`}>
            <li className="xs:pr-0 md:pr-10 2xl:pr-14 xs:my-5">
              <div className="md:hidden">
                <Search />
              </div>
              <a href="#" className="hidden md:block">
              <img
                style={{ minWidth: "100px" }}
                className="bg-cover w-32 xs:w-36 min-w-0"
                src="./logo.svg"
                alt="if(play)"
              />
            </a>
            </li>
            <li className="2xl:px-8 xs:pb-5 text-p-yellow-light">
              <a href="#">Inicio</a>
            </li>
            <li className="2xl:px-8 xs:pb-5 hover:text-p-yellow-light">
              <a href="#">Categorias</a>
            </li>
            <li className="2xl:px-8 hover:text-p-yellow-light">
              <a href="#">Continuar Assistindo</a>
            </li>
          </div>
          <div className="flex flex-row-reverse justify-between xs:w-full w-max">
            <button
              className={`xs:block hidden relative mx-5 ${
                menu && "mt-5"
              } delay-200 transition-all`}
              onClick={() => {
                openMenu(!menu);
              }}
            >
              <span
                className={`bg-white absolute rounded-3xl h-0.5 w-8 -mt-3 ${
                  menu && "transform rotate-45 delay-200 transition-all"
                }`}
              ></span>
              <span
                className={`bg-white absolute rounded-3xl h-0.5 w-8 ${
                  menu && "hidden delay-200 transition-all"
                }`}
              ></span>
              <span
                className={`bg-white absolute rounded-3xl h-0.5 w-8 my-3 ${
                  menu && "transform -rotate-45 -my-3 delay-200 transition-all"
                }`}
              ></span>
            </button>
            <a href="#" className="md:hidden">
              <img
                style={{ minWidth: "100px" }}
                className="bg-cover w-32 xs:w-36 min-w-0"
                src="./logo.svg"
                alt="if(play)"
              />
            </a>
            <div className="hidden md:block">
                <Search />
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
