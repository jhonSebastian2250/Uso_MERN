import React from "react";
import { useEffect, useState } from "react";
import { getVideos } from "./VideoService";
import VideoItem from "./VideoItem";

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  //carga los videos
  const loadVideos = async () => {
      //realiza la peticion de los videos
    const res = await getVideos();

    //convierte la fecha de los video es tipo Date
    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      //ordena los videos por fecha de creacion
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    //establece la lista de videos
    setVideos(formatedVideos);
  };

  //se ejecuta cada vez que se realize un cambio
  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
        {/* recorre la lista de videos y los evia a VideoItem */}
      {videos.map((video) => {
        return (
          <>
            <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
          </>
        );
      })}
    </div>
  );
}
