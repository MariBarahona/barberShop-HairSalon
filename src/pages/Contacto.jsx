import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h4>Contáctanos</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={5} required />
                </Form.Group>
                
                <Button variant="warning" type="submit" className="btn-gold">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5>Información de Contacto</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <h6><i className="bi bi-geo-alt"></i> Dirección</h6>
                <p>Independencia 2086, 2380394 Valparaíso, Chile</p>
              </div>
              
              <div className="mb-3">
                <h6><i className="bi bi-telephone"></i> Teléfono</h6>
                <p>+56 9 1234 5678</p>
              </div>
              
              <div className="mb-3">
                <h6><i className="bi bi-whatsapp"></i> WhatsApp</h6>
                <p>+56 9 1234 5678</p>
              </div>
              
              <div className="mb-3">
                <h6><i className="bi bi-envelope"></i> Email</h6>
                <p>barberShop&HairSalon@barberia.cl</p>
              </div>
              
              <div>
                <h6>Horarios de Atención</h6>
                <p>Lunes a Viernes: 09:00 - 20:00<br />
                   Sábado: 09:00 - 20:00<br />
                   Domingo: Cerrado</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;