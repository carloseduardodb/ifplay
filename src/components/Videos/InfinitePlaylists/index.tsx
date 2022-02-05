import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import api from "../../../services/api";
import Video from "../../UI/Video";
import Track from "../../UI/Track/index";
import { useSearch } from "../../../hooks/useSearch";

interface TrackProps {
  created_at: Date;
  id: number;
  name: string;
  quiz_id: number;
  teacher_id: number;
  updated_at: Date;
}

const InfinitePlaylists = () => {
  const [playlists, setPlaylists] = React.useState<TrackProps[]>([]);
  const { search, setSearch } = useSearch();
  useEffect(() => {
    api
      .get("playlist/all")
      .then(({ data }: AxiosResponse) => {
        setPlaylists(
          data.filter((dt) => {
            return dt.name.toLowerCase().includes(search.toLowerCase());
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [, search]);

  return (
    <>
      <p className="w-full text-3xl text-white font-bold mt-5 flex items-center">
        <FaPlus size={20} className="text-p-yellow-light mx-3" /> Mais playlists
      </p>
      <div className="w-full grid xs:grid-cols-1 2xl:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 mb-10">
        {playlists.map((playlist, key) => (
          <Track key={key} data={playlist} />
        ))}
      </div>
    </>
  );
};

export default InfinitePlaylists;
