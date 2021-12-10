import React from "react";
import { ReactNode } from "react";
import Link from "next/link";

interface TrackProps {
  created_at: Date;
  id: number;
  name: string;
  quiz_id: number;
  teacher_id: number;
  updated_at: Date;
}

interface Props {
  children?: ReactNode;
  data: TrackProps;
}

const Track = ({ data }: Props) => {
  return (
    <div className="p-5 w-full">
      <a href="">
        <img
          className="rounded-t-md"
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
          alt="Ainda teste"
        />
      </a>
      <div className="bg-p-black-dark opacity-80 px-5 py-2 rounded-b-md">
        <p className="text-white font-bold py-3 text-lg overflow-ellipsis whitespace-nowrap overflow-hidden">
          <Link href={`./playlists/${data.id}`}>
            <a className="hover:text-p-yellow-light">{data.name}</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Track;
