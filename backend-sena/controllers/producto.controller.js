const Producto = require('../models/producto');
const productoCtrl = {};

// Obtener todos los productos (GET)
productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

// Crear un producto (POST)
productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({ status: 'Producto guardado exitosamente' });
};

// Obtener un solo producto por su ID (GET)
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

// Actualizar un producto (PUT)
productoCtrl.editProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({ status: 'Producto Actualizado' });
};

// Eliminar un producto (DELETE)
productoCtrl.deleteProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Producto Eliminado' });
};

module.exports = productoCtrl;