import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    // Función para pedir los usuarios al Backend (GET)
    const getUsuarios = async () => {
        const res = await axios.get('http://localhost:3000/api/usuarios');
        setUsuarios(res.data);
    };

    // Se ejecuta al cargar la página
    useEffect(() => {
        getUsuarios();
    }, []);

    // Función para crear un usuario (POST)
    const crearUsuario = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/usuarios', {
            nombre, documento, correo, contrasena
        });
        // Limpiamos el formulario
        setNombre(''); setDocumento(''); setCorreo(''); setContrasena('');
        // Recargamos la lista
        getUsuarios(); 
    };

    // Función para eliminar (DELETE)
    const eliminarUsuario = async (id) => {
        await axios.delete('http://localhost:3000/api/usuarios/' + id);
        getUsuarios();
    };

    return (
        <div className="row mt-4">
            {/* Formulario */}
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Crear Usuario</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={crearUsuario}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Nombre" 
                                    value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Documento" 
                                    value={documento} onChange={(e) => setDocumento(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Correo" 
                                    value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" 
                                    value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Lista de Usuarios */}
            <div className="col-md-8">
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Documento</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario._id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.documento}</td>
                                <td>{usuario.correo}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => eliminarUsuario(usuario._id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Usuarios;