import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function Registrarse() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmarPassword: '',
    rol: 'Cliente', // Cliente o Trabajador
    tipoTrabajador: '' // Solo si rol = Trabajador
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación nombre
    if (!formData.nombre.trim()) {
      alert('Ingresa tu nombre completo');
      return;
    }

    // Validación email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Ingresa un email válido');
      return;
    }

    // Validación contraseña mínima
    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validar tipo de trabajador si es trabajador
    if (formData.rol === 'Trabajador' && !formData.tipoTrabajador) {
      alert('Selecciona un tipo de trabajador');
      return;
    }

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(formData));

    alert('Registro exitoso');
    console.log('Registro guardado:', formData);

    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      password: '',
      confirmarPassword: '',
      rol: 'Cliente',
      tipoTrabajador: ''
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Crear Cuenta</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

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

                <Form.Group className="mb-3">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmarPassword"
                    value={formData.confirmarPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tipo de cuenta</Form.Label>
                  <Form.Select name="rol" value={formData.rol} onChange={handleChange}>
                    <option value="Cliente">Cliente</option>
                    <option value="Trabajador">Trabajador</option>
                  </Form.Select>
                </Form.Group>

                {formData.rol === 'Trabajador' && (
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de trabajador</Form.Label>
                    <Form.Select
                      name="tipoTrabajador"
                      value={formData.tipoTrabajador}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Barbero">Barbero</option>
                      <option value="Estilista">Estilista</option>
                    </Form.Select>
                  </Form.Group>
                )}

                <Button variant="warning" type="submit" className="w-100 btn-gold">
                  Registrarse
                </Button>

                <div className="text-center mt-3">
                  <a href="/iniciar-sesion" className="text-decoration-none">
                    ¿Ya tienes una cuenta? Inicia sesión
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

export default Registrarse;
