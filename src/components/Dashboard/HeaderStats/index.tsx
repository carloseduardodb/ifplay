import React, { useEffect } from "react";
import CardStats from "../CardStats";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import api from "../../../services/api";

type StatsProps = {
  responsesCount: number;
  emailsCount: number;
  playlistsCount: number;
  answersCount: number;
  lastResponses: [
    {
      question_id: number;
      teacher_id: number;
      status: string;
      email: string;
    }
  ];
};

export default function HeaderStats() {
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const [stats, setStats] = React.useState<StatsProps>({} as StatsProps);

  useEffect(() => {
    api.get("/teacher/items/count").then((response) => {
      setStats(response.data);
    });
  }, [dispatch]);

  return (
    <>
      {/* Header */}
      <div className="relative bg-p-black-dark md:pt-24 pb-16 xs:pb-1 pt-8">
        <div className="px-4 md:px-12 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Respostas"
                  statTitle={`${stats.responsesCount}`}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-600"
                  statDescription="No ultimo mês"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Novos emails"
                  statTitle={`${stats.emailsCount}`}
                  statArrow="down"
                  statPercent="9.40"
                  statPercentColor="text-red-500"
                  statDescription="No ultimo mês"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-blue-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Playlists"
                  statTitle={`${stats.playlistsCount}`}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-red-500"
                  statDescription="No ultimo mês"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERGUNTAS"
                  statTitle={`${stats.answersCount}`}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-600"
                  statDescription="No ultimo mês"
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
