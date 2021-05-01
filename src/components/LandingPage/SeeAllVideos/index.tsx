import React from "react";

const SeeAllVideos = () => {
  return (
    <section className="flex justify-around items-center my-32">
      <img
        src="./seeallvideos.svg"
        width="50%"
        alt="Vários video um atras de outro em desenho"
      />
      <div className="w-96">
        <h2 className="text-3xl text-p-green font-bold my-3">
          Não se desespere!
        </h2>
        <span className="text-base text-white">
          Se nenhum dos videos ou trilhas acima te agradaram você pode ir para
          todos os videos.
          <br />
        </span>
        <button
          className="bg-p-blue px-5 py-3 rounded text-white mt-6"
          style={{ height: "max-content" }}
        >
          Ver todos os videos
        </button>
      </div>
    </section>
  );
};

export default SeeAllVideos;
