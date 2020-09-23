const express = require('express'); //el metodo router me permite tener un objeto que me facilita la creación de rutas
const router = express.Router();

router.get('/users/signin', (req, res)=>{
    res.render('users/signin');
});

router.get('/users/signup', (req, res)=>{
    res.render('users/signup');
});

module.exports = router;