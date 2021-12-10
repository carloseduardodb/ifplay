import React from "react";
import PlayQuestions from "../PlayQuestions";
import ListVideos from "./../ListVideos";
import { usePlaylist } from "../../../../hooks/usePlaylist";

const PlayerVideo = () => {
  const { selectPlaylist } = usePlaylist();
  // pega a chave de um link de video do youtube
  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <iframe
      width="100%"
      height="80%"
      src={`https://www.youtube.com/embed/${getId(
        selectPlaylist
      )}?modestbranding=1&rel=0&showinfo=0`}
      title="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    ></iframe>
  );
};

/** código do video
 * 
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hbTvThjKlUk?modestbranding=1&rel=0&showinfo=0"
          title="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
 */

export default PlayerVideo;
