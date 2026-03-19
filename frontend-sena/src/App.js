import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Login from './components/Login'; // <--- Importar Login

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<h2 className="text-center mt-5">Bienvenido al Sistema de Gestión SENA</h2>} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/login" element={<Login />} /> {/* <--- Nueva ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;