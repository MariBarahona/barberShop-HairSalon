import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContrasenaOlvidada() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Por favor, ingresa un correo electrónico.');
      return;
    }

    // Aquí iría la lógica para enviar el correo (ej: llamada a API)
    setMessage('Si el correo existe en nuestro sistema, te enviaremos instrucciones para restablecer tu contraseña.');

    // Resetear el campo de correo
    setEmail('');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Recuperar Contraseña</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 btn-gold">
                  Enviar instrucciones
                </Button>

                {message && (
                  <div className="mt-3 text-center text-info">
                    {message}
                  </div>
                )}

                <div className="text-center mt-3">
                  <a href="/iniciar-sesion" className="text-decoration-none">
                    ¿Ya recuerdas tu contraseña? Inicia sesión
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

export default ContrasenaOlvidada;
