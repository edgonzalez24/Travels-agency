const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes')

module.exports = function() {
    // USE -> Acepta todos los verbos de http
    // GET -> Acepta solo GET 
    // Render / Send

    // Routing  
    //Definiendo las vistas 
    // Render + Name File views
    router.get('/', (req, res) => {
        res.render('index', {
            pagina: 'Home'
        })
    })

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Nosotros'
        });
    });

    router.get('/viajes', (req, res) => {
        Viaje.findAll()
            .then(viajes => res.render('viajes', {
                pagina: 'Proximos Viajes',
                viajes
            }))
            .catch(error => console.log(error))
    });

    return router;
}