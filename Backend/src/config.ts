import dotenv from 'dotenv'
//lee el archivo .env cada ves que se ejecute el proyecto
dotenv.config()

//process.env = accede a el sistema y trae todas las variables de entorno que tenga
//console.log(process.env.HELLO)

//valores para mi base de datos
export default{
MONGO_DATABASE: process.env.MONGO_DATABASE || "mis-videos", //si no existe la primera entonces utiliza la segunda 
MONGO_USER: process.env.MONGO_USER || "admin",
MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
MONGO_HOST: process.env.MONGO_HOST || "localhost",
PORT: process.env.PORT || 2000
}