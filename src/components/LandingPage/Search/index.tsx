import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="text-white flex items-center bg-p-black-dark rounded-lg p-1">
      <FiSearch className="text-p-green bg-transparent mx-2" size={30} />
      <input
        className="py-1 rounded-r-lg font-normal text-base bg-transparent outline-none focus:border-transparent"
        type="text"
        placeholder="Pesquisar"
      />
    </div>
  );
};

export default Search;
