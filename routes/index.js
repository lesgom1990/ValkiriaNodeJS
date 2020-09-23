const express = require('express'); //el metodo router me permite tener un objeto que me facilita la creación de rutas
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.hbs');
});

router.get('/about', (req,res)=>{
    res.render('about.hbs');
});

module.exports = router;
