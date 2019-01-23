const express = require('express');
const router = express.Router();
// const anunciosMocks = require('../utils/mocks/anuncios');
const AnuncioService = require('../../services/anuncios');
const anuncioService = AnuncioService();

router.get('/', async (req, res, next) => {
  const { tags } = req.query;
  try {
    const anuncios = await anuncioService.getAnuncios({tags});
    res.render('index', {anuncios});
  }catch(err) {
    next(err);
  }
});

module.exports = router;