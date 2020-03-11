const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

module.exports = function() {
    // USE -> Acepta todos los verbos de http
    // GET -> Acepta solo GET 
    // Render / Send

    // Routing  
    //Definiendo las vistas 
    // Render + Name File views
    router.get('/', (req, res) => {
        Viaje.findAll({
                limit: 3
            })
            .then(viajes => res.render('index', {
                pagina: 'Proximos Viajes',
                clase: 'home',
                viajes
            }))
            .catch(error => console.log(error))
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

    router.get('/viajes/:id', (req, res) => {
        Viaje.findByPk(req.params.id)
            .then(viaje => res.render('viaje', {
                viaje
            }))
            .catch(error => console.log(error));
    });

    router.get('/testimoniales', (req, res) => {
        Testimonial.findAll()
            .then(testimoniales => res.render('testimoniales', {
                pagina: 'Testimoniales',
                testimoniales
            }))
    });
    router.post('/testimoniales', (req, res) => {
        // console.log(req.body)
        let { nombre, correo, mensaje } = req.body;
        let errores = [];
        if (!nombre) {
            errores.push({ 'mensaje': 'Agrega tu nombre' })
        }
        if (!correo) {
            errores.push({ 'mensaje': 'Agrega tu correo' })
        }
        if (!mensaje) {
            errores.push({ 'mensaje': 'Agrega tu mensaje' })
        }

        // Revisar errores
        if (errores.length > 0) {
            res.render('testimoniales', {
                errores,
                nombre,
                correo,
                mensaje
            });
        } else {
            Testimonial.create({
                    nombre,
                    correo,
                    mensaje
                }).then(testimonial => res.redirect('/testimoniales'))
                .catch(error => console.log(error))
        }
    });


    return router;
}