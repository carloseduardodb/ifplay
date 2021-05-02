import React from "react";
import PlayQuestions from "../PlayQuestions";
import ListVideos from "./../ListVideos";

const PlayerVideo = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/hbTvThjKlUk?modestbranding=1&rel=0&showinfo=0"
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
