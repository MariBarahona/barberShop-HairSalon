
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarritoContext } from '../src/Context/CarritoContext';
import Carrito from '../src/pages/Carrito';
import { vi } from 'vitest';

const mockEliminarDelCarrito = vi.fn();

const renderWithContext = (carrito = []) => {
  return render(
    <CarritoContext.Provider value={{ carrito, eliminarDelCarrito: mockEliminarDelCarrito }}>
      <Carrito />
    </CarritoContext.Provider>
  );
};

describe('Página Carrito', () => {
  it('muestra mensaje de carrito vacío', () => {
    renderWithContext([]);
    expect(screen.getByText(/tu carrito está vacío/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver tienda/i })).toBeInTheDocument();
  });

  it('muestra productos en el carrito y el resumen', () => {
    const productos = [
      { id: 1, name: 'Shampoo', price: 5000, quantity: 2, image: '/img/shampoo.png' },
      { id: 2, title: 'Corte de Cabello', price: 7000, quantity: 1, image: '/img/corte.png' }
    ];
    renderWithContext(productos);
    expect(screen.getByText('Productos (2)')).toBeInTheDocument();
    expect(screen.getByText('Shampoo')).toBeInTheDocument();
    expect(screen.getByText('Corte de Cabello')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(2);
    // Buscar los precios aunque estén separados en varios nodos
    const precioShampoo = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, '').includes('$5.000');
    });
    expect(precioShampoo).toBeInTheDocument();
    const precioCorte = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, '').includes('$7.000');
    });
    expect(precioCorte).toBeInTheDocument();
    expect(screen.getByText('Resumen del Pedido')).toBeInTheDocument();
    expect(screen.getByText('Subtotal:')).toBeInTheDocument();
    expect(screen.getByText('Envío:')).toBeInTheDocument();
    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /proceder al pago/i })).toBeInTheDocument();
  });

  it('llama a eliminarDelCarrito al hacer click en el botón de eliminar', () => {
    const productos = [
      { id: 1, name: 'Shampoo', price: 5000, quantity: 1, image: '/img/shampoo.png' }
    ];
    renderWithContext(productos);
    // Buscar el botón de eliminar por su clase y posición
    const btnEliminar = document.querySelector('.btn-outline-danger');
    fireEvent.click(btnEliminar);
    expect(mockEliminarDelCarrito).toHaveBeenCalledWith(1);
  });
});
