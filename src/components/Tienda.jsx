import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Tienda = () => {
  const products = [
    {
      id: 1,
      title: "L'Oréal Paris Men Expert Barber Club Shampoo",
      description: "Tipo: Shampoo especializado para hombres y cuero cabelludo sensible.",
      image: "/assets/img/Lorealparis_men_expert_barberclub.jpeg"
    },
    {
      id: 2,
      title: "The Barberia Cera Cabello & Barba",
      description: "Tipo: Cera moldeadora de fijación media con acabado mate.",
      image: "/assets/img/cera_de_barberia.jpg"
    },
    {
      id: 3,
      title: "Productos de Afeitado Proraso",
      description: "Prepara la piel y la barba para un afeitado más suave.",
      image: "/assets/img/barberia1.jpg"
    },
    {
      id: 4,
      title: "Cera Nish Man Gold One Nº 07",
      description: "Ideal para estilos duraderos.",
      image: "/assets/img/gold_Cera.jpg"
    },
    {
      id: 5,
      title: "Cera Nish Man Gold One Nº 07",
      description: "Fijación y control para estilos definidos.",
      image: "/assets/img/cera_nish_man.jpg"
    },
    {
      id: 6,
      title: "Alfaparf Semi di Lino",
      description: "Shampoo sin sulfatos que fortalece cabellos dañados.",
      image: "/assets/img/productouno.jpg"
    }
  ];

  return (
    <div>
      {/* Carrusel */}
      <Container fluid className="px-0 mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/bannerCarrucel1.png"
              alt="Banner 1"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/bannerCarrucel2.png"
              alt="Banner 2"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/img/bannerCarrucel3.png"
              alt="Banner 3"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Productos */}
      <Container className="my-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 product-card">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.title}
                  style={{height: '250px', objectFit: 'cover'}}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="small flex-grow-1">{product.description}</Card.Text>
                  <Button variant="primary" size="sm" className="mt-auto">Más Información</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Tienda;