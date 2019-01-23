// Los servicios van a llamar a la libreria que es la que nos devuelve los datos

const anunciosMocks = require('../utils/mocks/anuncios');
const Anuncio = require('../models/Anuncio');

function anuncioService() {
  
  return {
    getAnuncios: function({tags}) {
      // Anuncio.find({});
      return Promise.resolve(Anuncio.find({}));
    },

    createAnuncio: function({nombre}) {
      Anuncio.save();
      return Promise.resolve(anunciosMocks[0]);
    }
  }
}

module.exports = anuncioService;