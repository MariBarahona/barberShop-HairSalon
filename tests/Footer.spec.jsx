import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Componente Footer', () => {
  it('muestra la información de contacto', () => {
    renderWithRouter(<Footer />);
  expect(screen.getByText(/Independencia 2086/i)).toBeInTheDocument();
    expect(screen.getAllByText(/\+56 9 1234 5678/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/barberShop&HairSalon@barberia.cl/i)).toBeInTheDocument();
  });

  it('muestra los horarios de atención', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Lunes a Viernes: 09:00 - 20:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Sábado: 09:00 - 20:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Domingo: Cerrado/i)).toBeInTheDocument();
  });

  it('muestra los links rápidos', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /servicios/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserva/i })).toBeInTheDocument();
  });

  it('muestra los botones de redes sociales', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('button', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tiktok/i })).toBeInTheDocument();
  });

  it('muestra el copyright', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/© 2025 barberShop & HairSalon/i)).toBeInTheDocument();
  });
});
