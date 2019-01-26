const express = require('express');
const router = express.Router();
const { getAnuncios, createAnuncio, listarTags } = require('../../controller/anuncios');

router.get('/', getAnuncios);
router.get('/tags', listarTags);
router.post('/save', createAnuncio);

module.exports = router;