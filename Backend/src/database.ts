import mongoose from 'mongoose'
import config from './config'
//conexion a base de datos, es una funcion asincrona.
//la funcion es ejecutada automaticamente cada ves que 
//el modulo sea llamado gracias a ()()
(async () =>{  
    try{
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`);
    
        console.log("base de datos conectada a ", db.connection.name)
        
    }catch(error){
        console.error(error)
    }
})()