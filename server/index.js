// Immportar Express
const express = require('express');
const routes = require('./routes')
const path = require('path')


// Configurar Express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

//añadir files static
app.use(express.static('public'))

// Mostrar fecha actual
app.use((req, res, next) => {
        const fecha = new Date();
        res.locals.fechaActual = fecha.getFullYear();
        console.log(res.locals)
        return next();

    })
    // Cargar
app.use('/', routes());

app.listen(3000);