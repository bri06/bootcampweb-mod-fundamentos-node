const express = require('express');
const router = express.Router();
const { getAnuncios, createAnuncio } = require('../../controller/anuncios');

// Obtener todos los anuncios
router.get('/', getAnuncios);

// Guardar Anuncio
router.post('/save', createAnuncio);

module.exports = router;