import express from 'express'
import config from './config'
import morgan from 'morgan'
import cors from 'cors'
import videoRoutes from './routers/videos.routers'

const app = express();

//establece un puerto
app.set("port", config.PORT);

app.use(morgan("dev")); //muetra las peticiones en la consola
app.use(cors()); //permite que culaquier servidor se conecte
app.use(express.json()); //para que entienda los objetos .json cuando se hagan peticiones POST
app.use(express.urlencoded({extended: false})); //para que entienda los campos enviados desde un formulario a travez de una peticio POST

app.use(videoRoutes); //usa la ruta definida

export default app;