import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    const getProductos = async () => {
        const res = await axios.get('http://localhost:3000/api/productos');
        setProductos(res.data);
    };

    useEffect(() => {
        getProductos();
    }, []);

    const crearProducto = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/productos', {
            nombre, descripcion, precio, stock
        });
        setNombre(''); setDescripcion(''); setPrecio(''); setStock('');
        getProductos(); 
    };

    const eliminarProducto = async (id) => {
        await axios.delete('http://localhost:3000/api/productos/' + id);
        getProductos();
    };

    return (
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-success text-white">
                        <h5>Crear Producto</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={crearProducto}>
                            <div className="mb-3"><input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /></div>
                            <div className="mb-3"><input type="text" className="form-control" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required /></div>
                            <div className="mb-3"><input type="number" className="form-control" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required /></div>
                            <div className="mb-3"><input type="number" className="form-control" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required /></div>
                            <button type="submit" className="btn btn-success w-100">Guardar Producto</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr>
                    </thead>
                    <tbody>
                        {productos.map(p => (
                            <tr key={p._id}>
                                <td>{p.nombre}</td>
                                <td>${p.precio}</td>
                                <td>{p.stock}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => eliminarProducto(p._id)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Productos;