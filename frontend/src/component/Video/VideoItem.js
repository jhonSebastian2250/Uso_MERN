import React from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"; //para los videos
import { deleteVideo } from "./VideoService";
import "./VideoItem.css";

//lo que se va a mostrar del video
export default function VideoItem(props) {
  const { video, loadVideos } = props;
  const Navigate = useNavigate(); //para el enrutamiento
  const handleDelete = async (id) => {
    await deleteVideo(id);
    loadVideos();
  };
  return (
    <div className="col-md-4 ">
      <div
        className="card card-body video-card"
        style={{ cursor: "pointer" }} //cambia la forma del cursor
      >
        <div className="d-flex justify-content-between ">
          <h1
            onClick={() => Navigate(`/update/${video._id}`)} //cuando se hace clic se redirecciona
          >
            {video.title}
          </h1>
          <span className="text-danger" onClick={() => handleDelete(video._id)}>
            x
          </span>
        </div>

        <h6>{video.description}</h6>

        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={video.url}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
