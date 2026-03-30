// src/validaciones.test.js
import { validarAcceso } from './validaciones';

describe('Pruebas Unitarias de Lógica (Frontend)', () => {

    test('CP03: validacion de acceso exitoso', () => {
        // Le pasamos los datos correctos
        const resultado = validarAcceso('admin@sena.com', '1234');
        expect(resultado).toBe(true);
    });

    test('CP04: validacion de acceso denegado por mala contraseña', () => {
        // Le pasamos la contraseña equivocada
        const resultado = validarAcceso('admin@sena.com', '0000');
        expect(resultado).toBe(false);
    });

});