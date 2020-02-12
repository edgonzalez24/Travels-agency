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

// Cargar
app.use('/', routes());

app.listen(3000);