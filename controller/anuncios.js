const Anuncio = require('../models/Anuncio');

module.exports.getAnuncios = async (req, res, next) => {
  try {
    const filter = {};
    const { nombre, venta, tag, precio } = req.query;
    if (nombre) filter.nombre = new RegExp('^' + req.query.nombre, "i");
    if (venta) filter.venta = (venta.toLowerCase() == 'true'); 
    if (tag) filter.tags = { $in: [tag] };
    if (precio) {
      const [gte, lte] = precio.split('-');
      if (gte && lte) {
        filter.precio = { $gte: gte, $lte: lte };
      } else if (gte && !lte) {
        filter.precio = { $gte: gte };
      } else if (!gte && lte) {
        filter.precio = { $lte: lte };
      } else {
        filter.precio = { $gte: gte };
      }
    }
    const anuncios = await Anuncio.listar(filter);
    res.status(200).json({
      data: anuncios,
      message: 'Lista de anuncios'
    });
  } catch (err) {
    next(err);
  }
};

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
