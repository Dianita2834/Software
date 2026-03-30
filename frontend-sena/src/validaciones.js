// src/validaciones.js
export const validarAcceso = (correo, contrasena) => {
    if (correo === 'admin@sena.com' && contrasena === '1234') {
        return true;
    }
    return false;
};