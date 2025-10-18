import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Usuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);
  const [datosEditados, setDatosEditados] = useState({});

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado);
      setDatosEditados(usuarioGuardado);
    }
  }, []);

  const handleChange = (e) => {
    setDatosEditados({
      ...datosEditados,
      [e.target.name]: e.target.value
    });
  };

  const guardarCambios = () => {
    // Guardar cambios en localStorage
    localStorage.setItem('usuarioLogueado', JSON.stringify(datosEditados));
    setUsuario(datosEditados);
    setEditando(false);
    alert('Perfil actualizado correctamente');
  };

  if (!usuario) {
    return (
      <Container className="my-5 text-center">
        <h4>No hay un usuario logueado</h4>
        <p>Por favor, inicia sesión para ver tu información.</p>
        <Button href="/iniciar-sesion" variant="warning">
          Ir a Iniciar Sesión
        </Button>
      </Container>
    );
  }

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
                {usuario.rol === 'Cliente' && (
                  <Button variant="warning" className="btn-gold">
                    Ver Perfil Cliente
                  </Button>
                )}
                {usuario.rol === 'Trabajador' && (
                  <Button variant="outline-warning" className="btn-outline-gold">
                    Ver Perfil Trabajador ({usuario.tipoTrabajador})
                  </Button>
                )}
                {!editando ? (
                  <Button variant="outline-secondary" onClick={() => setEditando(true)}>
                    Editar Perfil
                  </Button>
                ) : (
                  <>
                    <Button variant="success" onClick={guardarCambios}>
                      Guardar Cambios
                    </Button>
                    <Button variant="secondary" onClick={() => {
                      setEditando(false);
                      setDatosEditados(usuario);
                    }}>
                      Cancelar
                    </Button>
                  </>
                )}
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    if (window.confirm('¿Estás seguro de eliminar tu cuenta?')) {
                      localStorage.removeItem('usuarioLogueado');
                      alert('Cuenta eliminada');
                      window.location.href = '/';
                    }
                  }}
                >
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
                  {editando ? (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre-input">Nombre</Form.Label>
                        <Form.Control
                          id="nombre-input"
                          type="text"
                          name="nombre"
                          value={datosEditados.nombre}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      {usuario.rol === 'Trabajador' && (
                        <Form.Group className="mb-3">
                          <Form.Label>Tipo de Trabajador</Form.Label>
                          <Form.Select
                            name="tipoTrabajador"
                            value={datosEditados.tipoTrabajador}
                            onChange={handleChange}
                          >
                            <option value="Barbero">Barbero</option>
                            <option value="Estilista">Estilista</option>
                          </Form.Select>
                        </Form.Group>
                      )}
                    </>
                  ) : (
                    <>
                      <p><strong>Nombre:</strong> {usuario.nombre}</p>
                      <p><strong>Email:</strong> {usuario.email}</p>
                      {usuario.rol === 'Trabajador' && (
                        <p><strong>Tipo de trabajador:</strong> {usuario.tipoTrabajador}</p>
                      )}
                    </>
                  )}
                </Col>
                                <Col sm={6}>
                  <p><strong>Rol:</strong> {usuario.rol}</p>
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

