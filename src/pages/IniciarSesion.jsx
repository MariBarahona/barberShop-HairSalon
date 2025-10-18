import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function IniciarSesion() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Ingresa un email válido');
      return;
    }

    if (!formData.password) {
      alert('Ingresa tu contraseña');
      return;
    }

    // Obtener usuario desde localStorage
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (!usuarioGuardado) {
      alert('No hay usuarios registrados');
      return;
    }

    // Comparar email y contraseña
    if (
      formData.email === usuarioGuardado.email &&
      formData.password === usuarioGuardado.password
    ) {
      alert(`¡Bienvenido ${usuarioGuardado.nombre}!`);
      console.log('Login exitoso:', usuarioGuardado);

      // Opcional: marcar usuario como "logueado" en localStorage
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioGuardado));

      // Limpiar formulario
      setFormData({ email: '', password: '' });
    } else {
      alert('Email o contraseña incorrectos');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Button variant="warning" type="submit" className="w-100 btn-gold">
                  Iniciar Sesión
                </Button>
                
                <div className="text-center mt-3">
                  <a href="/contrasenaolvidada" className="text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IniciarSesion;
