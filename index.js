const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//INITIALIZATIONS
const app = express();
require('./database')
//SETTINGS
app.set('port', process.env.PORT || 3000); //aca considera ambos, el 3000 o la entrada a un servidor en la nube
app.set('views', path.join(__dirname, 'views')); //es para decir que la carpeta views esta aqui, se configuro views 
app.engine('.hbs', exphbs({
    defaultLayout: 'main', //se llama main de la carpeta layouts, que tiene el html ppal
    layoutsDir: path.join(app.get('views'), 'layouts'), //aca estamos concatenando la carpeta views con layouts
    partialsDir: path.join(app.get('views'), 'partials'), //pequeñas partes de html que podemos utilizar en cualquier vista
    extname: '.hbs'//es para ponerle la extensión a nuestros archivos
})); //se usa el modulo de handlebars, por eso dice hbs.
app.set('view engine', '.hbs')//esto es para configurar el motor de plantillas

//MIDDLEWARES
app.use(express.urlencoded({extended: false})); //es para entender los formularios que me llegan. Se pone extended false porque no quiero aceptar imagenes por ejemplo
app.use(methodOverride('method')); //sirve para que los formularios puedan enviar otros métodos como put y delete
app.use(session({
   secret: 'mysecret',
   resave: true, //estandar
   saveUninitialized: true //estandar
}));

//GLOBAL VARIABLES


// ROUTES
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//SERVER IS LISTENNING
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});