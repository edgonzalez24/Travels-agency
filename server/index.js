// Immportar Express
const express = require('express');
const routes = require('./routes')


// Configurar Express
const app = express();

// Cargar
app.use('/', routes());

app.listen(3000);