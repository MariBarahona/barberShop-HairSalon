import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge } from 'react-bootstrap';
import { productsData } from '../db/product';
import { CarritoContext } from '../Context/CarritoContext'; // <-- importamos el contexto

const Tienda = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { agregarAlCarrito } = useContext(CarritoContext); // <-- usamos useContext

  const { products, categories } = productsData;

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Carrusel */}
      <Container fluid className="px-0 mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/bannerCarrucel1.png"
              alt="Banner 1"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/bannerCarrucel2.png"
              alt="Banner 2"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/bannerCarrucel3.png"
              alt="Banner 3"
              style={{height: '400px', objectFit: 'cover'}}
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Filtros por Categoría */}
      <Container className="mb-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Button 
                variant={selectedCategory === 'all' ? 'warning' : 'outline-warning'}
                className={selectedCategory === 'all' ? 'btn-gold' : 'btn-outline-gold'}
                onClick={() => setSelectedCategory('all')}
              >
                Todos los Productos
              </Button>
              {categories.map((category) => (
                <Button 
                  key={category.id}
                  variant={selectedCategory === category.id ? 'warning' : 'outline-warning'}
                  className={selectedCategory === category.id ? 'btn-gold' : 'btn-outline-gold'}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Productos */}
      <Container className="my-5">
        <h2 className="text-center mb-4">
          {selectedCategory === 'all' 
            ? 'Todos nuestros Productos' 
            : categories.find(cat => cat.id === selectedCategory)?.name
          }
        </h2>
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 product-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.title}
                    style={{height: '250px', objectFit: 'cover'}}
                  />
                  {!product.inStock && (
                    <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
                      Agotado
                    </Badge>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6">{product.title}</Card.Title>
                  <Card.Text className="small flex-grow-1 text-muted">
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="h5 text-success mb-0">
                      ${product.price.toLocaleString()} CLP
                    </span>
                    <Badge bg="secondary" pill>
                      {categories.find(cat => cat.id === product.category)?.name}
                    </Badge>
                  </div>
                  <div className="d-flex gap-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-grow-1"
                      disabled={!product.inStock}
                      onClick={() => agregarAlCarrito(product)} // <-- funcionalidad agregada
                    >
                      {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <i className="bi bi-eye"></i>
                    </Button>
                  </div>
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
