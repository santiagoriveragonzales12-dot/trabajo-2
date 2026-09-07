// routes/fisicaRoutes.js
const express = require('express');
const router = express.Router();

const { 
    calcularVelocidad, 
    calcularAceleracion, 
    calcularFuerza, 
    calcularEnergia, 
    calcularDensidad 
} = require('../controllers/fisicaController');

router.post('/velocidad', calcularVelocidad);
// Ruta POST para calcular la velocidad
router.post('/aceleracion', calcularAceleracion);
// Ruta POST para calcular la aceleración
router.post('/fuerza', calcularFuerza);
// Ruta POST para calcular la fuerza
router.post('/energia', calcularEnergia);
// Ruta POST para calcular la energía
router.post('/densidad', calcularDensidad);
// Ruta POST para calcular la densidad

module.exports = router;