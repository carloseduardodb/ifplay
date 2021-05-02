import React from "react";
import ListVideos from "./../ListVideos";

const PlayerVideo = () => {
  return (
    <section className="container my-5 flex">
      <div style={{ height: "85vh" }} className="w-8/12">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/hbTvThjKlUk?modestbranding=1&rel=0&showinfo=0"
          title="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div>
      <ListVideos />
    </section>
  );
};

export default PlayerVideo;
