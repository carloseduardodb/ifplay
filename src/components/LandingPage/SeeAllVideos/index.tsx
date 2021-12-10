import React from "react";
import Link from "next/link";

const SeeAllVideos = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-around items-center mt-20 mb-24">
      <img
        src="./seeallvideos.svg"
        width="50%"
        alt="Vários video um atras de outro em desenho"
      />
      <div className="w-96 flex- flex-row justify-center">
        <h2 className="text-3xl text-p-green font-bold my-3 text-center md:text-right">
          Não se desespere!
        </h2>
        <span className="text-base text-white">
          Se nenhum dos videos ou trilhas acima te agradaram você pode ir para
          todos os videos.
          <br />
        </span>
        <div className="text-center">
          <Link
            href={{
              pathname: "./playlists",
              query: {
                entryMode: "seeAllVideos",
              },
            }}
          >
            <button
              className="bg-p-blue px-5 py-3 rounded text-white mt-6"
              style={{ height: "max-content" }}
            >
              Ver todos os videos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SeeAllVideos;
