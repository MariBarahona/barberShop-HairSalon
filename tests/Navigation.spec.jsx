import { render, screen } from '@testing-library/react';
import Navigation from '../src/components/Navigation';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('Componente Navigation', () => {
  it('muestra el título principal', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('heading', { name: /BarberShop & HairSalon/i })).toBeInTheDocument();
  });

  it('muestra el nombre de la barbería en la barra', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText('BarberiaHair')).toBeInTheDocument();
  });

  it('muestra los enlaces principales', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tienda/i })).toBeInTheDocument();
  });

  it('muestra el menú Mi Cuenta', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText('Mi Cuenta')).toBeInTheDocument();
    // No se puede asegurar que los items del dropdown estén en el DOM si el menú no está abierto
  });

  it('muestra el formulario de búsqueda', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });
});
