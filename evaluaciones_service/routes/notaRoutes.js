const express = require('express');
const { crearNota, obtenerNotas } = require('../controllers/notaController');

const router = express.Router();

router.post('/', crearNota);
router.get('/', obtenerNotas);

module.exports = router;
