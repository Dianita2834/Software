import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/usuarios/login', {
                correo, contrasena
            });
            
            if (res.data.acceso) {
                setMensaje("✅ " + res.data.status);
            } else {
                setMensaje("❌ " + res.data.status);
            }
        } catch (error) {
            setMensaje("❌ Error al conectar con el servidor");
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-header bg-dark text-white text-center">
                        <h4>Iniciar Sesión</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={manejarLogin}>
                            <div className="mb-3">
                                <label className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Entrar</button>
                        </form>
                        {mensaje && <div className="alert mt-3 text-center">{mensaje}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;