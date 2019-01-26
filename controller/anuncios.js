const Anuncio = require('../models/Anuncio');

module.exports.getAnuncios = async (req, res, next) => {
  try {
    let { nombre, venta, tag, precio, skip, limit, fields, sort } = req.query;
    const anuncioFiltrado = Anuncio.filtrado(nombre, venta, tag, precio);
    const anuncios = await Anuncio.listar(anuncioFiltrado, skip, limit, fields, sort );
    res.status(200).json({
      results: anuncios,
      message: 'Lista de anuncios'
    });
  } catch (err) {
    next(err);
  }
};

module.exports.listarTags = async (req, res, next) => {
  try {
    const listaTags = await Anuncio.find({}, {'tags': 1});
    res.status(200).json({
      results: listaTags,
      message: 'Lista de tags'
    });
  } catch (err) {
    next(err);
  }
}

module.exports.createAnuncio = async (req, res, next) => {
  try {
    const { body: data } = req;
    const anuncio = new Anuncio(data);
  
    const anuncioCreado = await anuncio.save();
    res.status(201).json({
      data: anuncioCreado,
      message: 'Anuncio creado'
    });
  } catch (err) {
    next(err);
  }
};
