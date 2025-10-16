import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Usuario = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <h5>Mi Cuenta</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="warning" className="btn-gold">
                  Ver Perfil Cliente
                </Button>
                <Button variant="outline-warning" className="btn-outline-gold">
                  Ver Perfil Trabajador
                </Button>
                <Button variant="outline-secondary">
                  Editar Perfil
                </Button>
                <Button variant="outline-danger">
                  Eliminar Cuenta
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5>Información de la Cuenta</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <p><strong>Nombre:</strong> Usuario Demo</p>
                  <p><strong>Email:</strong> usuario@demo.com</p>
                  <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Miembro desde:</strong> Enero 2025</p>
                  <p><strong>Última visita:</strong> Hoy</p>
                  <p><strong>Estado:</strong> Activo</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          
          <Card className="mt-4">
            <Card.Header>
              <h5>Historial de Citas</h5>
            </Card.Header>
            <Card.Body>
              <p className="text-muted">No tienes citas programadas aún.</p>
              <Button variant="warning" className="btn-gold">
                Agendar Nueva Cita
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Usuario;