const express = require('express');
const router = express.Router();
const controllerAnuncio = require('../../services/anuncios');

// Obtener todos los anuncios
router.get('/',controllerAnuncio.getAnuncios);

// Guardar Anuncio
router.post('/save', controllerAnuncio.createAnuncio);

module.exports = router;