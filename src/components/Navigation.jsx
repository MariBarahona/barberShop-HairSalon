import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      {/* Título principal */}
      <h1 className="tituloCentrado section-header-lines main-header-dark">BarberShop & HairSalon</h1>
      
      {/* Barra de navegación */}
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-dark-gold">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-medium">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="fw-medium">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/tienda" className="fw-medium">Tienda</Nav.Link>
            <NavDropdown title="Desplegables" id="basic-nav-dropdown" className="fw-medium">
              <NavDropdown.Item as={Link} to="/carrito">Carrito</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/usuario">Mi Cuenta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex me-2">
            <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Buscar" />
            <Button variant="outline-warning" className="btn-outline-search" type="submit">Buscar</Button>
          </Form>
          
          <div className="d-flex gap-2">
            <Button as={Link} to="/iniciar-sesion" variant="warning" className="btn-gold">Iniciar Sesión</Button>
            <Button as={Link} to="/registro" variant="outline-warning" className="btn-outline-gold">Registrarse</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;