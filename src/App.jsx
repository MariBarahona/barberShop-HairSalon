import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
import IniciarSesion from './pages/IniciarSesion';
import Usuario from './components/Usuario';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Registrarse from './pages/Registrarse';
import ContrasenaOlvidada from './pages/ContrasenaOlvidada';

// Importar el Provider del carrito
import { CarritoProvider } from './Context/CarritoContext';

function App() {
  return (
    // Envolvemos toda la app con CarritoProvider
    <CarritoProvider>
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/contrasenaolvidada" element={<ContrasenaOlvidada />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CarritoProvider>
  );
}

export default App;
