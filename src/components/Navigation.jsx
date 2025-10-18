import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <h1 className="tituloCentrado section-header-lines main-header-dark">BarberShop & HairSalon</h1>
      
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-dark-gold">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
            BarberiaHair
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="fw-medium">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/nosotros" className="fw-medium">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/tienda" className="fw-medium">Tienda</Nav.Link>
              <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown" className="fw-medium">
                <NavDropdown.Item as={Link} to="/carrito">Carrito</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/usuario">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iniciar-sesion">Iniciar Sesión</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registrarse">Registrarse</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Form className="d-flex me-2">
              <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Buscar" />
              <Button variant="outline-warning" type="submit">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;