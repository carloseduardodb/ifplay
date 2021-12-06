import React from "react";
import { FiFilePlus } from "react-icons/fi";
import CardStats from "../CardStats";
import CreatePlaylistModal from "../Modals/CreatePlaylistModal";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";

const HeaderStatsPlaylists = () => {
  const [open, setOpen] = useState(false);
  const [responses, setResponses] = useState(0);
  const [playlists, setPlaylists] = useState(0);
  const { dispatch, setDispatch } = useDispatchGlobalEvent();
  const handleViewModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    api.get("/teacher/answers/count").then((response) => {
      setResponses(response.data[0].count);
    });
    api.get("/teacher/playlist/count").then((response) => {
      setPlaylists(response.data[0].count);
    });
  }, [dispatch]);

  return (
    <div className="relative bg-p-black-dark md:pt-24 pb-16 xs:pb-1 pt-8">
      <div className="px-4 md:px-12 mx-auto w-full">
        <div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="Respostas"
                statTitle={`${responses}`}
                statPercentColor="text-green-600"
                statDescription="No ultimo mês"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="Playlists"
                statTitle={`${playlists}`}
                statPercentColor="text-red-500"
                statDescription="No ultimo mês"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-blue-500"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-6/12 px-4 flex flex-row-reverse">
              <button
                onClick={() => {
                  handleViewModal();
                }}
                className="bg-p-green rounded-full p-3 h-16 w-16 flex justify-center items-center xs:mb-5"
              >
                <FiFilePlus size={35} color="white" />
              </button>
              <CreatePlaylistModal open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStatsPlaylists;
