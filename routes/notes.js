const express = require('express'); //el metodo router me permite tener un objeto que me facilita la creación de rutas
const { Timestamp } = require('mongodb');
const router = express.Router();

const Note = require('../models/Note.js');
//gracias a este Note le puedo decir a mi programa
//si quiero un nuevo dato, si lo quiero actualizar, eliminar,etc


router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

//ruta para recibir datos
router.post('/notes/new-note', async (req, res) => {//el async para indicar que es asíncrono
    const { title, description } = req.body;//aca se reciben los datos
    const errors = [];
    if (!title) {
        errors.push({ text: 'please introduce the title' });
    }
    if (!description) {
        errors.push({ text: "please add description" });
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    }
    else {
        //aca vamos a crear un nuevo dato con Note
        const newNote = new Note({ title, description });
        await newNote.save(); //es asíncrono por eso se pone el async await, para indicar que esta tarea mientras se ejecuta, puede ir haciendo otras
        res.redirect('/notes'); //cuando termine de guardar lo redirecciono a esta ruta
    }//esta ruta (notes), sera la encargada de consultar los datos desde la base de datos
    //con el método save se guarda la info obtenida del usuario
})

router.get('/notes', async (req, res) => {
    const notes = await Note.find().sort({date: 'desc'});//para mostrar todos los datos, puedo ser mas descriptivo
    //poniendo dentro del find por ejemplo que aparezcan solo los que tienen título tal (consulta de base de datos)
    res.render('notes/all-notes.hbs', {notes}) // aca voy a retornar los datos a una vista
//la vista all-notes va a empezar a listar todas las notas que tengamos de la base de datos
//con {notes} se van pasando las notas
});

module.exports = router;