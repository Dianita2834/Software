const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    documento: { type: String, required: true, unique: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);