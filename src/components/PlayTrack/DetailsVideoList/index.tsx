import React from "react";

const DetailsVideoList = () => {
  return (
    <li className="flex ml-5 w-full bg-p-black-dark justify-around py-3 px-3 rounded border-p-purple-light border-2 shadow-lg">
      <img
        className="bg-contain w-24 mr-2 h-full rounded-md"
        src="https://images.unsplash.com/photo-1563104360-0bd260fe5221?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
        alt="É bom colocar no banco a descrição a thumbnail"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-white whitespace-nowrap overflow-hidden w-64">
          Lorem ipsum amet dolar in options name
        </h3>
        <p className="text-sm overflow-ellipsis w-64">
          Neste video é ensina tal coisae qa gente uma descrição que é bem ...
        </p>
      </div>
    </li>
  );
};

export default DetailsVideoList;
