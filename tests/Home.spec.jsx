import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';
import React from 'react';
import { describe, it, expect } from 'vitest';

describe('Página Home', () => {
  it('muestra el banner principal', () => {
    render(<Home />);
    const banner = screen.getByAltText('Banner');
    expect(banner).toBeInTheDocument();
    expect(banner).toHaveAttribute('src', '/img/banner.jpg');
  });

  it('muestra el título de servicios', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /servicios/i })).toBeInTheDocument();
  });

  it('muestra todos los servicios con su botón de agendar', () => {
    render(<Home />);
    // Hay 8 servicios
    const accordions = screen.getAllByRole('button', { name: /corte clásico|degradado moderno|arreglo de barba|tintura|tratamiento capilar|peinado de fiesta|alisado permanente|corte deseado/i });
    expect(accordions.length).toBeGreaterThanOrEqual(8);
    // Hay 8 botones de agendar
    const agendarBtns = screen.getAllByRole('button', { name: /agendar hora/i });
    expect(agendarBtns.length).toBe(8);
  });

  it('muestra la imagen de cada servicio', () => {
    render(<Home />);
    // Verifica que al menos una imagen de servicio esté presente
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(9); // 1 banner + 8 servicios
  });
});
