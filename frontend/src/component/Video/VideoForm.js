import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createVideo, getvideo, updateVideo } from "./VideoService";
import { toast } from "react-toastify";

export default function VideoForm() {
  const Navigate = useNavigate(); //permite cambiar el enrutador
  const params = useParams(); //obtiene el _id

  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  //estado del video, al final guarda los campos del video
  const [video, setvideo] = useState(initialState);

  //rellena los campos del video segun el contenido de los input
  const handleInputChange = (e) => {
    //target hace referencia al objeto actual
    setvideo({ ...video, [e.target.name]: e.target.value });
  };

  //controla el envio del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      try {
        //crea un video
        const res = await createVideo(video);
        //alerta de creacion de video
        toast("new video added");

        //enrutacion a la raiz
        Navigate("/");
      } catch (error) {
        toast("video exit");
      }
    } else {
      await updateVideo(params.id, video);
      toast("video update");
      //enrutacion a la raiz
      Navigate("/");
    }
  };

  const getVideo = async (id) => {
    const res = await getvideo(id);
    const { title, description, url } = res.data;
    setvideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h1>new video</h1>

            {/* formulario */}
            <form onSubmit={handleSubmit}>
              <div className="form-group p-1">
                <input
                  type="text"
                  name="title"
                  placeholder="Escriba un titulo para el video"
                  className="form-control"
                  autoFocus
                  required
                  onChange={handleInputChange}
                  value={video.title}
                />
              </div>

              <div className="form-group p-1">
                <input
                  type="text"
                  name="url"
                  placeholder="url://misvideos.com"
                  className="form-control"
                  required
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group p-1">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Escriba una descripcion"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>

              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create Video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
