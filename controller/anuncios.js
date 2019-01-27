const Anuncio = require('../models/Anuncio');

module.exports.getAnuncios = async (req, res, next) => {
  try {
    let { nombre, venta, tag, precio, start, limit, sort } = req.query;
    const anuncioFiltrado = Anuncio.filtrado(nombre, venta, tag, precio);
    const anuncios = await Anuncio.listar(anuncioFiltrado, parseInt(limit), parseInt(start), sort);
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
    const listaTags = await Anuncio.find({}, { 'tags': 1 });
    const tags = getTags(listaTags);
    res.status(200).json({
      results: tags,
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

const getTags = listaTags => {
  let arrTags = [];
  listaTags.forEach(data => {
    data.tags.forEach(tag => {
      if (!arrTags.includes(tag)) arrTags.push(tag);
    });
  });
  return arrTags;
}
