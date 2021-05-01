import React, { useState } from "react";
import { GiCookie } from "react-icons/gi";

const YouWantCookies = () => {
  //verify to cookies
  const [cookies, isCookies] = useState(false);
  if (cookies) {
    return (
      <div className="fixed w-full px-20 py-3 bottom-0 bg-p-black-dark right-0 flex justify-around items-center">
        <p className="text-white flex items-center">
          <GiCookie color="#a3723e" className="pr-5" size={60} />
          Para o melhor funcionamento dos serviços nosso site utiliza cookies.
          <br /> Ao utiliza-los, você aceita o uso que fazemos dos cookies.{" "}
        </p>
        <button className="bg-p-green px-5 py-2 rounded text-white hover:shadow-2xl hover:opacity-90">
          OK
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default YouWantCookies;
