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

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;