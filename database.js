//esta es la parte de la conexión a la base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true, // notes-db-app es el nombre de mi base de datos, aca la estoy creando
    useNewUrlParser: true,
    useFindAndModify: false
}) //se adiciona un objeto para configurarlo
.then(db => console.log('DB is connected'))
.catch(err=>console.error(err))