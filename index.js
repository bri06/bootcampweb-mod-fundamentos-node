const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //es necesario para poder procesar cuerpos que vienen en formato json
const anunciosRouter = require('./routes/views/anuncios');
const anunciosAPIRouter = require('./routes/api/anuncios');

const app = express();

app.use(bodyParser.json());

// Statics files

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Conexion a la Base de Datos
 */
require('./lib/connectMongoose');
require('./models/Anuncio');

/**
 * ROUTES
 * Establecemos los endpoints de nuestros anuncios
 */
app.use('/anuncios', anunciosRouter);
app.use('/api/anuncios', anunciosAPIRouter);

// Redirect
app.get('/', (req, res, next) => {
  res.redirect('/anuncios');
});

// server initialization
const server = app.listen(8000, () => {
  console.log(`Listening on http://localhost:${server.address().port}`);
});