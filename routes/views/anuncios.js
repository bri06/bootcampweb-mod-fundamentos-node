const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

router.get('/', async (req, res, next) => {
  try {
    const { nombre, venta, tag, precio } = req.query;
    const anuncioFiltrado = Anuncio.filtrado(nombre, venta, tag, precio);
    const anuncios = await Anuncio.listar(anuncioFiltrado);
    res.render('index', { anuncios });
  } catch (err) {
    next(err);
  }
});

module.exports = router;