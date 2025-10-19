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

    if (!formData.nombre.trim()) {
      alert('Ingresa tu nombre completo');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Ingresa un email válido');
      return;
    }

    if (formData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (formData.rol === 'Trabajador' && !formData.tipoTrabajador) {
      alert('Selecciona un tipo de trabajador');
      return;
    }

    localStorage.setItem('usuario', JSON.stringify(formData));

    alert('Registro exitoso');
    console.log('Registro guardado:', formData);

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
                {/* Nombre */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="nombre">Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Confirmar Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="confirmarPassword">Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    id="confirmarPassword"
                    name="confirmarPassword"
                    value={formData.confirmarPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                {/* Tipo de cuenta */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="rol">Tipo de cuenta</Form.Label>
                  <Form.Select
                    id="rol"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Trabajador">Trabajador</option>
                  </Form.Select>
                </Form.Group>

                {/* Tipo de trabajador solo si rol = Trabajador */}
                {formData.rol === 'Trabajador' && (
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="tipoTrabajador">Tipo de trabajador</Form.Label>
                    <Form.Select
                      id="tipoTrabajador"
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
