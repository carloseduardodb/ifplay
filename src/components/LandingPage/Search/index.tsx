import React from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

const Search = () => {
  const { push } = useRouter();
  const [search, setSearch] = React.useState("");
  return (
    <div className="text-white flex items-center bg-p-black-dark rounded-lg p-1 border-2 focus:shadow-2xl focus:border-2 border-p-green">
      <FiSearch className="text-p-green bg-transparent mx-2" size={20} />
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            push(`playlists?entryMode=seeAllVideos&q=${search}`);
          }
        }}
        className="py-1 rounded-r-lg font-normal text-sm bg-transparent outline-none border-transparent border-b-2 border-t-2 focus:border-gray-700 transition-all delay-150"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
