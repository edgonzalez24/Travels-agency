const express = require('express');
const router = express.Router();

module.exports = function() {
    // USE -> Acepta todos los verbos de http
    // GET -> Acepta solo GET 
    router.get('/', (req, res) => {
        res.send('Home')
    })

    // Routing
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros')
    })

    return router;
}