import React, { useEffect } from "react";
import { useState } from "react";
import {
  FiAperture,
  FiArchive,
  FiEdit3,
  FiPlay,
  FiPlusCircle,
} from "react-icons/fi";
import CreateAnswerModal from "../../components/Dashboard/Modals/CreateAnswerModal";
import CreateVideosModal from "../../components/Dashboard/Modals/CreateVideosModal/index";
import CreateQuestionsModal from "../../components/Dashboard/Modals/CreateQuestionsModal/index";
import EditNameQuizModal from "../../components/Dashboard/Modals/CreateQuizModal/index";
import CreateTeamModal from "../../components/Dashboard/Modals/CreateTeamModal/index";
import HeaderStats from "../../components/Dashboard/HeaderStats/index";
import CardTable from "../../components/Dashboard/CardTable/index";

type WhichModal = {
  status: boolean;
  name: string;
};

export default function Dashboard() {
  const [open, setOpen] = useState<WhichModal>({ status: false, name: "" });
  const handleViewModal = (name: string) => {
    setOpen({ status: true, name: name });
  };

  return (
    <>
      <HeaderStats />
      <div className="relative pb-16 xs:pb-1 -top-8">
        <div className="px-4 md:px-16 mx-auto w-full">
          <CardTable />
        </div>
      </div>
    </>
  );
}
