import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contacto</h5>
            <p className="mb-1"><i className="bi bi-geo-alt"></i> Independencia 2086, 2380394 Valparaíso, Chile</p>
            <p className="mb-1"><i className="bi bi-telephone"></i> +56 9 1234 5678</p>
            <p className="mb-1"><i className="bi bi-whatsapp"></i> WhatsApp: +56 9 1234 5678</p>
            <p className="mb-1"><i className="bi bi-envelope"></i> barberShop&HairSalon@barberia.cl</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Horarios</h5>
            <p className="mb-1">Lunes a Viernes: 09:00 - 20:00</p>
            <p className="mb-1">Sábado: 09:00 - 20:00</p>
            <p className="mb-1">Domingo: Cerrado</p>
            <h5 className="fw-bold mt-3">Links rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Inicio</Link></li>
              <li><Link to="/#servicios" className="text-white text-decoration-none">Servicios</Link></li>
              <li><button className="btn btn-link text-white text-decoration-none p-0" style={{border: 'none'}}>Reserva</button></li>
              <li><Link to="/contacto" className="text-white text-decoration-none">Contacto</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Síguenos</h5>
            <button className="btn btn-link text-white text-decoration-none p-0 me-2" style={{border: 'none'}}><i className="bi bi-instagram"></i> Instagram</button><br />
            <button className="btn btn-link text-white text-decoration-none p-0 me-2" style={{border: 'none'}}><i className="bi bi-facebook"></i> Facebook</button><br />
            <button className="btn btn-link text-white text-decoration-none p-0" style={{border: 'none'}}><i className="bi bi-tiktok"></i> TikTok</button>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <div className="text-center">
          <small>© 2025 barberShop & HairSalon | Todos los derechos reservados</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;