// modelo del anuncio de mongoose
/**
 * Aqui configuramos los campos que va a tener el modelo!!!
 */
const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});

// Creamos y guardamos el modelo en mongoose
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
// cuando este se guarda se crea un documento en mongoDB con las propiedades
// definidas por el esquema que se deriva

module.exports = Anuncio;