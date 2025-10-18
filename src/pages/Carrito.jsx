import React, { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Carrito de Compras</h2>
      
      {carrito.length === 0 ? (
        <Card>
          <Card.Body className="text-center">
            <h5>Tu carrito está vacío</h5>
            <p>¡Agrega productos desde nuestra tienda!</p>
            <Button variant="warning" href="/tienda">Ver Tienda</Button>
          </Card.Body>
        </Card>
      ) : (
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Header>
                <h5>Productos ({carrito.length})</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {carrito.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <img 
                          src={item.image} 
                          alt={item.name || item.title}
                          className="img-fluid"
                          style={{maxHeight: '80px', objectFit: 'cover'}}
                        />
                      </Col>
                      <Col xs={6} md={6}>
                        <h6>{item.name || item.title}</h6>
                        <p className="text-muted mb-0">${item.price.toLocaleString()}</p>
                      </Col>
                      <Col xs={2} md={2}>
                        <div className="d-flex align-items-center">
                          <Button variant="outline-secondary" size="sm">-</Button>
                          <span className="mx-2">{item.quantity || 1}</span>
                          <Button variant="outline-secondary" size="sm">+</Button>
                        </div>
                      </Col>
                      <Col xs={1} md={2} className="text-end">
                        <Button 
                          variant="outline-danger" 
                          size="sm"
                          onClick={() => eliminarDelCarrito(item.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card>
              <Card.Header>
                <h5>Resumen del Pedido</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span>$3.000</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong>${(total + 3000).toLocaleString()}</strong>
                </div>
                <Button variant="warning" className="w-100 btn-gold">
                  Proceder al Pago
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Carrito;
