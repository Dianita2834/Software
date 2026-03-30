const request = require('supertest');
const express = require('express');

// 1. Configuramos una "mini-app" falsa solo para la prueba
const app = express();
app.use(express.json());

// Simulamos la ruta que queremos probar
app.get('/api/usuarios', (req, res) => {
    res.status(200).json([{ nombre: "Usuario Prueba" }]);
});

// 2. Escribimos el caso de prueba usando Jest
describe('Pruebas sobre el Endpoint de Usuarios', () => {

    test('GET /api/usuarios debería responder con estado 200', async () => {
        // Hacemos una petición falsa con supertest a nuestra mini-app
        const response = await request(app).get('/api/usuarios');
        
        // Lo que esperamos (expect) que pase
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

});