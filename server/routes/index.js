const express = require('express');
const router = express.Router();

module.exports = function() {
    // USE -> Acepta todos los verbos de http
    // GET -> Acepta solo GET 
    // Render / Send
    // Render + Name File views
    router.get('/', (req, res) => {
        res.render('index')
    })

    // Routing
    router.get('/nosotros', (req, res) => {
        res.render('nosotros')
    })

    return router;
}