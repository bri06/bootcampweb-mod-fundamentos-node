/**
 * Inicializamos la base de datos
 */
const readLine = require('readline');
const db = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio'); //le pasamos el modelo
const anunciosMocks = require('./utils/mocks/anuncios');

db.once('open', async () => {
  try {
    const respuesta = await askUser('Estas seguro de que quieres que borre toda la base de datos? (no) ');
    if (respuesta.toLowerCase() !== 'si') {
      console.log('Abortado');
      process.exit(0);
    }
    await insertAnuncios();
    db.close();
  } catch (err) {
    console.log('Se produjo un error', err);
    process.exit(1);
  }
});

const askUser = (question) => {
  return new Promise((resolve, reject) => {
    const interface = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    interface.question(question, answer => { 
      interface.close();
      resolve(answer);
      return;
    });  
  });
}

const insertAnuncios = async () => {
  const deleted = await Anuncio.deleteMany();
  console.log('Borrados: ',deleted.n);
  const added = await Anuncio.insertMany(anunciosMocks);
  //Borrar consoles luego
  console.log(added);
  console.log(`Insertados ${added.length} anuncios`);
}
