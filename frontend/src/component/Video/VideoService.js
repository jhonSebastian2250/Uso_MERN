import axios from 'axios'

const API = "http://localhost:2000";

export const getVideos = async () =>{
    return await axios.get(`${API}/videos`)
    
}

export const getvideo = async (id) =>{
    return await axios.get(`${API}/videos/${id}`)
}

export const createVideo = async (video) =>{
    return await axios.post(`${API}/videos`, video)
}

export const updateVideo = async (id, video) =>{
    return await axios.put(`${API}/videos/${id}`, video)
}

export const deleteVideo = async (id) =>{
    return await axios.delete(`${API}/videos/${id}`)
}