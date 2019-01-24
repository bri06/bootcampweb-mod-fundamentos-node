const Anuncio = require('../models/Anuncio');

module.exports.getAnuncios = async (req, res, next) => {
  try {
    const filter = {};
    const { nombre, venta, tag, precio } = req.query;

    if (nombre) filter.nombre = new RegExp('^' + req.query.nombre, "i");
    if (venta) filter.venta = (venta.toLowerCase() == 'true'); //REVISAR OTRA VEZ
    if (tag) filter.tags = { $in: [tag] };
    if (precio) { //REFACTORIZAR
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
      message: 'lista de anuncios'
    });
  } catch (err) {
    next(err);
  }
};

module.exports.createAnuncio = (req, res, next) => {
  const { body: data } = req;

  let anuncio = new Anuncio(data);

  anuncio.save((err, anuncio) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(201).json({
      data: anuncio,
      message: 'anuncio creado'
    });

  });
};
