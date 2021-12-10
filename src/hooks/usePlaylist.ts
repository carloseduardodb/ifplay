import { useContext } from "react";
import { PlaylistContext } from "../contexts/PlaylistContext";

export const usePlaylist = () => {
  const value = useContext(PlaylistContext);
  return value;
};
