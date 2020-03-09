// Immportar Express
const express = require('express');
const routes = require('./routes')
const path = require('path')
const configs = require('./config')


// test DB conection
// db.authenticate()
//     .then(() => console.log('DB Conectada'))
//     .catch(error => console.log(error))

// Configurar Express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

//añadir files static
app.use(express.static('public'))

//Validar el entorno de desarrollo
const config = configs[app.get('env')];

//Crear variable para el sitio
app.locals.titulo = config.nombresitio;

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