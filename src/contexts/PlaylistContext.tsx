import { createContext, ReactNode, useState, useEffect } from "react";
import api from "../services/api";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";

interface PlaylistContextProviderProps {
  children: ReactNode;
}

interface Root {
  playlist: Playlist[];
  quiz: Quiz;
  videos: Video[];
  questions: Question[];
}

interface Playlist {
  id: number;
  name: string;
  quiz_id: number;
  teacher_id: number;
  created_at: string;
  updated_at: string;
}

interface Quiz {
  id: number;
  title: string;
  code: string;
  teacher_id: number;
  created_at: string;
  updated_at: string;
}

interface Video {
  id: number;
  playlist_id: number;
  teacher_id: number;
  url: string;
  views: number;
  created_at: string;
  updated_at: string;
}

interface Question {
  id: number;
  title: string;
  quizId: number;
  teacherId: number;
  createdAt: string;
  updatedAt: string;
  alternatives: Alterna[];
}

interface Alterna {
  id: number;
  title: string;
  question_id: number;
  teacher_id: number;
  is_response?: number;
  created_at: string;
  updated_at: string;
}
interface Responses {
  questionId: number;
  alternaId: number;
  response: boolean;
}

type Props = {
  playlist: Root;
  selectPlaylist: string;
  setSelectPlaylist: (playlist: string) => void;
  isQuestions: boolean;
  setIsQuestions: (isQuestions: boolean) => void;
  questionPosition: number;
  nextPosition: () => void;
  resetPosition: () => void;
  questionStatusScreen: string;
  resetPlaylist: () => void;
  setQuestionStatusScreen(
    questionStatusScreen: "survey" | "question" | "finally" | "responses"
  ): void;
  addResponseQuestions: (
    questionId: number,
    alternaId: number,
    response: boolean
  ) => void;
  responses: Responses[];
  verifyResponses: () => {
    hits: number;
    errors: number;
    total: number;
  };
};

export const PlaylistContext = createContext({} as Props);

export function PlaylistProvider({ children }: PlaylistContextProviderProps) {
  const [playlist, setPlaylist] = useState<Root>();
  const [selectPlaylist, setSelectPlaylist] = useState<string>();
  const [isQuestions, setIsQuestions] = useState<boolean>(false);
  const [questionPosition, setQuestionPosition] = useState<number>(1);
  const [questionStatusScreen, setQuestionStatusScreen] =
    useState<string>("survey");

  const [responses, setResponses] = useState<Responses[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("playlists/")) {
      api
        .get(`/playlist/${router.query.selectPlaylist}`)
        .then(({ data }: AxiosResponse) => {
          setPlaylist(data);
        });
    }
  }, [router.query.selectPlaylist]);

  useEffect(() => {
    setIsQuestions(false);
  }, [selectPlaylist]);

  const nextPosition = () => {
    setQuestionPosition(questionPosition + 1);
  };

  const resetPosition = () => {
    setQuestionPosition(0);
  };

  const resetPlaylist = () => {
    setQuestionPosition(1);
    setIsQuestions(false);
    setQuestionStatusScreen("survey");
    setSelectPlaylist(playlist?.videos[0].url);
    setResponses([]);
  };

  const verifyResponses = () => {
    let hits = 0;
    let errors = 0;
    let total = 0;

    // percorrer respostas
    responses.forEach((response) => {
      if (response.response) {
        hits++;
      } else {
        errors++;
      }
      total++;
    });
    return {
      hits,
      errors,
      total,
    };
  };

  useEffect(() => {
    console.log(responses);
  }, [responses]);

  // logic video position
  const addResponseQuestions = (
    questionId: number,
    alternaId: number,
    response: boolean
  ) => {
    setResponses([...responses, { questionId, alternaId, response }]);
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        setSelectPlaylist,
        selectPlaylist,
        isQuestions,
        setIsQuestions,
        nextPosition,
        questionPosition,
        resetPosition,
        questionStatusScreen,
        setQuestionStatusScreen,
        resetPlaylist,
        addResponseQuestions,
        responses,
        verifyResponses,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
