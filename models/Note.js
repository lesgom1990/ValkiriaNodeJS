//para almacenar los datos que llegan de las notas
const mongoose = require('mongoose'); //vamos a usar mongoose porque nos sirve
//para crear esquemas de datos
const { Schema } = mongoose;

//a continuación vamos a definir que tendran mis notas (ppdes)
//vamos a definir como van a lucir mis notas
//esto es para mostrar como luciran mis datos, pero aun no estan los modelos
const NoteSchema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

//ahora vamos a crear el modelo:
module.exports = mongoose.model('Note', NoteSchema)//recibe dos parámetros, 
//la nota y el esquema