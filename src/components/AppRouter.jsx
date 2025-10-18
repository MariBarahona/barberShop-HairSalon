import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Usuario from './Usuario';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Tienda from '../pages/Tienda';
import Carrito from '../pages/Carrito';
import IniciarSesion from '../pages/IniciarSesion';
import Contacto from '../pages/Contacto';

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/registro" element={<Usuario />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Rutas adicionales que se pueden agregar más tarde */}
            <Route path="/contrasena-olvidada" element={<div className="container my-5"><h2>Contraseña Olvidada</h2><p>Página en construcción</p></div>} />
            <Route path="/perfil-cliente" element={<div className="container my-5"><h2>Perfil Cliente</h2><p>Página en construcción</p></div>} />
            <Route path="/perfil-trabajador" element={<div className="container my-5"><h2>Perfil Trabajador</h2><p>Página en construcción</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;