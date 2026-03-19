import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">SENA Web</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/usuarios">Usuarios</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;