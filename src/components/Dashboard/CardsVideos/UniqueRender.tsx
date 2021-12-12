import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import DeleteModal from "../../../components/Dashboard/Modals/DeleteModal";
import api from "../../../services/api";
import { useDispatchGlobalEvent } from "../../../hooks/useDispatchGlobalEvent";
import EditVideoNameModal from "../Modals/EditVideoNameModal/index";

const UniqueRender = ({ video }) => {
  const [videoTitle, setVideoTitle] = React.useState("");
  const { setDispatch, dispatch } = useDispatchGlobalEvent();
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    api
      .delete(`teacher/playlist/video/${video.id}`)
      .then((data) => {
        console.log(data);
        toast.success("Item apagado com sucesso!");
        setDispatch(!dispatch);
      })
      .catch((err) => {
        toast.error("Erro ao apagar item!");
      });
  };
  //uma funcao que puxa o id do video do youtube usando a url
  function getId(url: string) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${getId(
        video.url
      )}&key=AIzaSyA1NpAPjo2rXcj7dRxKwqj9JtlX_P-v0HA%20&part=snippet`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("aqui");
        /*if (data !== undefined && data.items[0])
          setVideoTitle(data.items[0].snippet.title);*/
      });
  }, []);

  return (
    <div key={video.id}>
      <div className="bg-white rounded-md p-5 mb-10 w-96 text-left">
        <label htmlFor="" className="font-semibold">
          Nome do video
        </label>
        <p>{videoTitle}</p>
        <br />
        <label htmlFor="" className="font-semibold">
          Url:
        </label>
        <br />
        <a className="text-blue-500" href={video.url}>
          {video.url}
        </a>
        <div className="flex justify-end">
          <EditVideoNameModal video={video} />
          <DeleteModal handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default UniqueRender;
