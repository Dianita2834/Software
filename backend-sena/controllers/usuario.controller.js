const Usuario = require('../models/usuario');
const usuarioCtrl = {};

// Obtener todos los usuarios (GET)
usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

// Crear un usuario (POST)
usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({ status: 'Usuario guardado exitosamente' });
};

// Obtener un solo usuario por su ID (GET)
usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

// Actualizar un usuario (PUT)
usuarioCtrl.editUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        documento: req.body.documento,
        correo: req.body.correo,
        contrasena: req.body.contrasena
    };
    await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({ status: 'Usuario Actualizado' });
};

// Eliminar un usuario (DELETE)
usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ status: 'Usuario Eliminado' });
};

module.exports = usuarioCtrl;

// Autenticar un usuario (LOGIN)
usuarioCtrl.loginUsuario = async (req, res) => {
    // 1. Recibimos el correo y la contraseña que manda Postman
    const { correo, contrasena } = req.body;
    
    // 2. Buscamos si existe un usuario con ese correo en la base de datos
    const usuario = await Usuario.findOne({ correo: correo });

    // 3. Si no existe el usuario, devolvemos un error
    if (!usuario) {
        return res.json({ status: 'Acceso Denegado: Usuario no encontrado', acceso: false });
    }

    // 4. Si la contraseña no coincide, devolvemos un error
    if (usuario.contrasena !== contrasena) {
        return res.json({ status: 'Acceso Denegado: Contraseña incorrecta', acceso: false });
    }

    // 5. Si todo está correcto, le damos la bienvenida
    res.json({ status: 'Autenticación exitosa. ¡Bienvenido a la aplicación!', acceso: true });
};