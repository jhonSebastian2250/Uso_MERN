import {Router} from 'express'
import * as videoCrlt from './videos.controller'

const router = Router() //permite definir rutas de navegacion

router.get("/videos", videoCrlt.getVideos);

router.get("/videos/:id", videoCrlt.getVideo);

router.post("/videos", videoCrlt.createVideo);

router.delete("/videos/:id", videoCrlt.deleteVideo);

router.put("/videos/:id", videoCrlt.updateVideo);

export default router