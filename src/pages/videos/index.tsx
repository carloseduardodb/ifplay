import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const { push } = useRouter();
  useEffect(() => {
    push("./playlists", {
      query: {
        entryMode: "seeAllVideos",
      },
    });
  }, []);

  return <div></div>;
};

export default index;
