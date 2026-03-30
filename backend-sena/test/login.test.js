const request = require('supertest');
const express = require('express');

// Configuramos la mini-app para simular tu ruta de login
const app = express();
app.use(express.json());

// Simulamos el comportamiento exacto de tu backend
app.post('/api/usuarios/login', (req, res) => {
    const { correo, contrasena } = req.body;
    
    // Si los datos son correctos
    if (correo === 'admin@sena.com' && contrasena === '1234') {
        return res.status(200).json({ acceso: true, status: "Autenticación exitosa" });
    }
    // Si los datos son incorrectos
    return res.status(401).json({ acceso: false, status: "Credenciales incorrectas" });
});

// Escribimos los Casos de Prueba (Igual que en la guía del SENA)
describe('Módulo de Login', () => {

    test('CP01: Login válido con credenciales correctas', async () => {
        const response = await request(app)
            .post('/api/usuarios/login')
            .send({ correo: 'admin@sena.com', contrasena: '1234' });
        
        expect(response.statusCode).toBe(200);
        expect(response.body.acceso).toBe(true);
    });

    test('CP02: Login inválido con contraseña incorrecta', async () => {
        const response = await request(app)
            .post('/api/usuarios/login')
            .send({ correo: 'admin@sena.com', contrasena: '0000' });
        
        expect(response.statusCode).toBe(401);
        expect(response.body.acceso).toBe(false);
    });

})