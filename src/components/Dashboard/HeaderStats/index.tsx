import React from "react";

// components

import CardStats from "../CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-p-black-dark md:pt-32 pb-16 xs:pb-1 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Respostas"
                  statTitle="350"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-600"
                  statDescripiron="No ultimo mês"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Novos emails"
                  statTitle="8"
                  statArrow="down"
                  statPercent="9.40"
                  statPercentColor="text-red-500"
                  statDescripiron="No ultimo mês"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Playlists"
                  statTitle="5"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-red-500"
                  statDescripiron="No ultimo mês"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERGUNTAS"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-600"
                  statDescripiron="No ultimo mês"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
