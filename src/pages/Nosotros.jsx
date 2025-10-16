import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Nosotros = () => {
  return (
    <div>
      {/* Misión y Visión */}
      <Card className="text-bg-dark" style={{border: 'none'}}>
        <Card.Img 
          src="/img/banner2.png" 
          alt="Banner" 
          style={{
            width: '100%', 
            height: '100vh', 
            objectFit: 'cover', 
            objectPosition: 'top', 
            opacity: 0.5
          }}
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Card.Title as="h1">Nosotros</Card.Title>
          <Card.Text style={{fontSize: '25px'}}>
            <strong>Misión</strong><br />
            Nuestra misión es proporcionar servicios de peluquería y barbería de calidad mediante una plataforma online accesible e inclusiva,<br />
            que permita a los clientes agendar citas en salones, barberías o en la comodidad de su hogar,<br />
            con la opción de personalizar la experiencia seleccionando los productos que prefieren usar durante el servicio.<br /><br />

            <strong>Visión</strong><br />
            Nuestra visión es ser la plataforma líder en reservas de peluquería y barbería en Chile,<br />
            reconocida por la innovación, la inclusión, el servicio al cliente y la integración con proveedores de productos,<br />
            ofreciendo una experiencia completa y personalizada.<br />
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      {/* Ubicación */}
      <Card className="text-center my-5">
        <Card.Header className="section-header-lines">Donde Estamos</Card.Header>
      </Card>

      {/* Mapa */}
      <iframe 
        className="mapa w-100" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3011735304644!2d-71.61832277347644!3d-33.04853697704354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0d96e64832f%3A0x2a5aece1efd64db6!2sIndependencia%202086%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1757112880719!5m2!1ses!2scl" 
        style={{border: 0, height: '400px'}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de ubicación"
      />

      {/* Nuestro Equipo */}
      <Card className="text-center my-5">
        <Card.Header className="section-header-lines">
          Nuestro Equipo
        </Card.Header>
        <Card.Body>
          <Card.Title as="h3">Conoce a nuestro grupo de profesionales</Card.Title>
          <Card.Text>Aquí puedes agendar hora con nosotros.</Card.Text>
          <div className="d-flex justify-content-center">
            <Button 
              variant="success" 
              href="tel:+56912345678" 
              className="d-inline-flex align-items-center gap-1"
            >
              <i className="bi bi-telephone-fill"></i> Llamar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Nosotros;