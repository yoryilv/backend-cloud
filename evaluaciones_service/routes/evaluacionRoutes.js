const express = require('express');
const { crearEvaluacion, obtenerEvaluaciones } = require('../controllers/evaluacionController');

const router = express.Router();

router.post('/', crearEvaluacion);
router.get('/', obtenerEvaluaciones);

module.exports = router;
