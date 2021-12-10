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

type Props = {
  playlist: Root;
  selectPlaylist: string;
  setSelectPlaylist: (playlist: string) => void;
};

export const PlaylistContext = createContext({} as Props);

export function PlaylistProvider({ children }: PlaylistContextProviderProps) {
  const [playlist, setPlaylist] = useState<Root>();
  const [selectPlaylist, setSelectPlaylist] = useState<string>();
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
  return (
    <PlaylistContext.Provider
      value={{ playlist, setSelectPlaylist, selectPlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
