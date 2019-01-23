const express = require('express');
const router = express.Router();
const AnuncioService = require('../../services/anuncios');

const anuncioService = AnuncioService();

router.get('/', async (req, res, next) => {
  const { tags } = req.query;
  try {
    const anuncios = await anuncioService.getAnuncios({ tags });
  
    res.status(200).json({
      data: anuncios,
      message: 'lista de anuncios'
    });
  } catch(err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {
  const { body: anuncio } = req;
  try {
    const anuncioCreado = anuncioService.createAnuncio({ anuncio });
    
    res.status(201).json({
      data: anuncioCreado,
      message: 'anuncio creado'
    });
  } catch(err) {
    next(err);
  }
});

module.exports = router;