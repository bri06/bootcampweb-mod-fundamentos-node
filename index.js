const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //es necesario para poder procesar cuerpos que vienen en formato json
const anunciosRouter = require('./routes/views/anuncios');
const anunciosAPIRouter = require('./routes/api/anuncios');

const app = express();

app.use(bodyParser.json());

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

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

// Error handler
app.use((err, req, res, next) => {
  if (err.array) {
    err.status = 442;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = isAPIRequest(req) ? { message: 'Not valid', errors: err.mapped() } : `No valido - ${errInfo.param} ${errInfo.msg}`;
  }
  res.status(err.status || 500);
  if (isAPIRequest(req)) {
    res.json({ success: false, error: err.message });
    return;
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.render('error');
});

function isAPIRequest(req) {
  return req.originalUrl.indexOf('/apiv') === 0;
}

module.exports = app;
