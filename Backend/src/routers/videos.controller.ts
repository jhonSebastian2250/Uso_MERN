import {RequestHandler} from 'express'
import Video from './video'

export const createVideo: RequestHandler = async(req, res) =>{
    //console.log(req.body); req.body tiene lo que esta enviando el cliente
    const videoURL = await Video.findOne({url: req.body.url});
    if(videoURL){
        return res.status(301).json({message: "URL existente"});
    }
    
    const video = new Video(req.body); //crea un objeto de tipo video con los datos que resibe del cliente
    const saveVideo = await video.save(); //guarda en la base de datos
    res.json(saveVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find(); //obtener videos
    return res.json(videos);
    } catch (error) {
        res.json(error)
    }
};

export const getVideo: RequestHandler = async (req, res) =>{
    //console.log(req.params) //req.params contiene el valor del dato que se esta enviando
    const video = await Video.findById(req.params.id)
    if(!video) return res.status(204).json();
    return res.json(video);
};

export const deleteVideo: RequestHandler = async (req, res) =>{
    const video = await Video.findByIdAndDelete(req.params.id)
    if(!video) return res.status(204).json();
    return res.json(video);
};

export const updateVideo: RequestHandler = async (req, res) =>{
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {new:true}); //{new:true} para que devuelva el objeto actualizado
    if(!video) return res.status(204).json();
    res.json(video)
};