import React from "react";

interface detailsQuestion {
  selected?: Boolean;
}

const DetailsQuestions: React.FC<detailsQuestion> = ({ selected = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex mx-5 shadow-lg mb-2 rounded p-2 bg-p-black ${
          selected ? "border-p-yellow-light border-2 shadow-2xl" : ""
        }`}
      >
        <img
          className="bg-contain w-24 h-full border-2 border-p-black-dark shadow-lg"
          src="https://images.unsplash.com/photo-1563104360-0bd260fe5221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          alt="É bom colocar no banco a descrição a thumbnail"
        />
        <div className="px-2 py-1">
          <h3 className="text-white font-bold">Lorem ipsum amet dolar...</h3>
          <p className="text-white text-xs opacity-70">
            Neste video é ensina tal coisae qa gente uma descrição que é bem ...
          </p>
        </div>
      </a>
    </li>
  );
};

export default DetailsQuestions;
