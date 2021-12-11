import React from "react";
import SurveyComponent from "./SurveyComponent";
import Question from "./SurveyComponent/Question";
import Finally from "./SurveyComponent/Finally";
import ViewResponses from "./SurveyComponent/ViewResponses";
import { usePlaylist } from "../../../../hooks/usePlaylist";

const PlayQuestions = () => {
  const { questionStatusScreen } = usePlaylist();
  if (questionStatusScreen === "survey") {
    return <SurveyComponent />;
  }
  if (questionStatusScreen === "question") {
    return <Question />;
  }
  if (questionStatusScreen === "finally") {
    return <Finally />;
  }
  if (questionStatusScreen === "responses") {
    return <ViewResponses />;
  }
};

export default PlayQuestions;
