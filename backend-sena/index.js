const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database'); // Llama al archivo de la base de datos

const app = express();

// --- Configuraciones ---
app.set('port', process.env.PORT || 3000);

// --- Middlewares ---
app.use(morgan('dev')); // Muestra las peticiones en la consola
app.use(cors()); // Permite que otros servidores (como el frontend después) se conecten
app.use(express.json()); // Permite entender los datos en formato JSON

// --- Rutas ---
app.get('/api', (req, res) => {
    res.json({ status: '¡El API REST está funcionando al 100%!' });
});

app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/productos', require('./routes/producto.routes')); // ¡Esta es la línea nueva!

// Ruta de Usuarios
app.use('/api/usuarios', require('./routes/usuario.routes'));

// --- Iniciar el servidor ---
app.listen(app.get('port'), () => {
    console.log(`Servidor activo en el puerto ${app.get('port')} 🚀`);
});