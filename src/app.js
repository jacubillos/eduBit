const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();

// Conectando base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db conectada'))
    .catch(err => console.log(err))

// Importando rutas
const indexRoutes = require('./routes/index');

// Configuración
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', indexRoutes);

// Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});