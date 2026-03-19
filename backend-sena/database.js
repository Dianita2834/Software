const mongoose = require('mongoose');

// El nombre de la base de datos será 'api_sena' (MongoDB la creará automáticamente)
const URI = 'mongodb://127.0.0.1:27017/api_sena';

mongoose.connect(URI)
    .then(db => console.log('La DB se encuentra conectada perfectamente 😎'))
    .catch(err => console.error('Error al conectar a la DB:', err));

module.exports = mongoose;