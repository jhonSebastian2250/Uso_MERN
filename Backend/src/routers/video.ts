import {Schema, model} from 'mongoose'

const videoSchema = new Schema({
    title: {
        type: String,
        required: true, //campo requerido
        trim: true //elimina espacios al inicio y al final
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true  //valor unico
    }
},
{
    versionKey: false, //elimina el v_0 de mongodb
    timestamps: true //crea registro de creacion y actualizacion
});

export default model("video", videoSchema);