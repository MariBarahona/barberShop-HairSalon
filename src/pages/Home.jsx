import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

function Home () {
  const services = [
    {
      id: 1,
      title: "Corte Clásico",
      price: "7.000 CLP",
      duration: "30 min",
      description: "Corte sencillo y elegante, ideal para mantener tu estilo habitual, tanto para hombres como para mujeres (unisex).",
      image: "img/corte_clasico.png"
    },
    {
      id: 2,
      title: "Degradado Moderno (barbería)",
      price: "$9.000 CLP",
      duration: "45 min",
      description: "Corte con técnica de degradado que da un look moderno y definido, exclusivo para estilos de barbería.",
      image: "img/Degradado_moderno.jpg"
    },
    {
      id: 3,
      title: "Arreglo de Barba",
      price: "$5.000 CLP",
      duration: "20 min",
      description: "Arreglo y perfilado de barba, para un look cuidado y elegante.",
      image: "img/arreglo_barba.jpg"
    },
    {
      id: 4,
      title: "Tintura + Corte (dama/caballero)",
      price: "$15.000 CLP",
      duration: "60 min",
      description: "Cambio de color acompañado de un corte, ideal para renovar tu estilo de pies a cabeza.",
      image: "img/corte_mas_tintura.webp"
    },
    {
      id: 5,
      title: "Tratamiento Capilar Nutritivo",
      price: "$12.000 CLP",
      duration: "40 min",
      description: "Nutre y fortalece tu cabello, dejándolo más suave, brillante y saludable.",
      image: "img/tratamientos-capilares.png"
    },
    {
      id: 6,
      title: "Peinado de Fiesta/Evento",
      price: "$20.000 CLP",
      duration: "1 hora y 30 min",
      description: "Peinado profesional para ocasiones especiales, asegurando un look elegante y duradero.",
      image: "img/peinado_fiesta.png"
    },
    {
      id: 7,
      title: "Alisado Permanente",
      price: "$35.000 CLP",
      duration: "2 horas",
      description: "Tratamiento para alisar el cabello de manera prolongada, dejando un acabado liso y manejable.",
      image: "img/alisado_permanente.jpg"
    },
    {
      id: 8,
      title: "Corte Deseado + Domicilio (coste adicional)",
      price: "Variable",
      duration: "Variable",
      description: "Elige tu estilo + coste de envío según zona: Valparaíso $2.000, Viña del Mar $3.000, Quilpué $4.000, Villa Alemana $5.000.",
      image: "img/corte_domicilio.jpg"
    }
  ];

  return (
    <div>
      {/* Banner */}
      <img src="/img/banner.jpg" style={{width: '100%'}} alt="Banner" />
      
      {/* Servicios */}
      <Container className="my-5">
        <h1 className="tituloCentrado section-header-lines italic-header text-center mb-4">Servicios</h1>
        
        <Accordion flush>
          {services.map((service) => (
            <Accordion.Item key={service.id} eventKey={service.id.toString()}>
              <Accordion.Header>{service.title}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={8}>
                    <p>{service.price} - {service.duration}. {service.description}</p>
                  </Col>
                  <Col md={4} className="text-center">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="acordeon-img-servicio img-fluid mb-2"
                      style={{maxHeight: '150px', objectFit: 'cover'}}
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-2">
                  <Button variant="warning" className="btn-gold">Agendar hora</Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Home;