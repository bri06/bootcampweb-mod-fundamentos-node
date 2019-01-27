const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});

anuncioSchema.statics.listar = (filter, limit, skip, sort) => {
  const query = Anuncio.find(filter)
  query.skip(skip)
  query.limit(limit)
  query.sort(sort)
  return query.exec();
}

anuncioSchema.statics.filtrado = (nombre, venta, tag, precio) => {
  const filter = {};
  
  if (nombre) filter.nombre = new RegExp('^' + nombre, "i");
  if (venta) filter.venta = (venta.toLowerCase() == 'true'); 
  if (tag) {
    const tags = tag.split(',');
    filter.tags = { $in: tags };
  }
  if (precio) {
    const [gte, lte] = precio.split('-');
    if (lte === undefined){
      filter.precio = gte;
    } else if (gte && lte) {
      console.log(gte);
      filter.precio = { $gte: gte, $lte: lte };
    } else if (gte && !lte) {
      filter.precio = { $gte: gte };
    } else if (!gte && lte) {
      filter.precio = { $lte: lte };
    }
  }

  return filter;
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;