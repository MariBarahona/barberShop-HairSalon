import { render, screen, fireEvent } from '@testing-library/react';
import Usuario from '../src/components/Usuario';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock para localStorage y window.location
const mockUsuarioCliente = {
  nombre: 'Juan Pérez',
  email: 'juan@correo.com',
  rol: 'Cliente'
};
const mockUsuarioTrabajador = {
  nombre: 'Ana López',
  email: 'ana@correo.com',
  rol: 'Trabajador',
  tipoTrabajador: 'Barbero'
};

global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn()
};
global.alert = vi.fn();
global.confirm = vi.fn(() => true);
global.window = Object.create(window);
global.window.location = { href: '' };

describe('Componente Usuario', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('muestra mensaje si no hay usuario logueado', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    render(<Usuario />);
    expect(screen.getByText(/no hay un usuario logueado/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
  });

  it('muestra datos y botones para un usuario Cliente', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockUsuarioCliente));
    render(<Usuario />);
    expect(screen.getByText('Mi Cuenta')).toBeInTheDocument();
    expect(screen.getByText('Ver Perfil Cliente')).toBeInTheDocument();
    // Buscar el elemento <p> que contiene el nombre
    const nombreCliente = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, ' ').includes('Nombre:') &&
        node.textContent.replace(/\s+/g, ' ').includes('Juan Pérez');
    });
    expect(nombreCliente).toBeInTheDocument();
    const emailCliente = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, ' ').includes('Email:') &&
        node.textContent.replace(/\s+/g, ' ').includes('juan@correo.com');
    });
    expect(emailCliente).toBeInTheDocument();
    const rolCliente = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, ' ').includes('Rol:') &&
        node.textContent.replace(/\s+/g, ' ').includes('Cliente');
    });
    expect(rolCliente).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /editar perfil/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /eliminar cuenta/i })).toBeInTheDocument();
  });

  it('muestra datos y botones para un usuario Trabajador', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockUsuarioTrabajador));
    render(<Usuario />);
    expect(screen.getByText('Ver Perfil Trabajador (Barbero)')).toBeInTheDocument();
    // Buscar el <p> que contiene el label y el valor, aunque estén en nodos separados
    const tipoTrabajador = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, ' ').includes('Tipo de trabajador:') &&
        node.textContent.replace(/\s+/g, ' ').includes('Barbero');
    });
    expect(tipoTrabajador).toBeInTheDocument();
    const rolTrabajador = screen.getByText((content, node) => {
      return node.tagName === 'P' &&
        node.textContent.replace(/\s+/g, ' ').includes('Rol:') &&
        node.textContent.replace(/\s+/g, ' ').includes('Trabajador');
    });
    expect(rolTrabajador).toBeInTheDocument();
  });

  it('permite editar y guardar el perfil', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockUsuarioCliente));
    render(<Usuario />);
    fireEvent.click(screen.getByRole('button', { name: /editar perfil/i }));
    const inputNombre = screen.getByLabelText('Nombre');
    fireEvent.change(inputNombre, { target: { value: 'Juanito' } });
    fireEvent.click(screen.getByRole('button', { name: /guardar cambios/i }));
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith('Perfil actualizado correctamente');
  });

  it('permite eliminar la cuenta', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockUsuarioCliente));
    render(<Usuario />);
    fireEvent.click(screen.getByRole('button', { name: /eliminar cuenta/i }));
    expect(localStorage.removeItem).toHaveBeenCalledWith('usuarioLogueado');
    expect(alert).toHaveBeenCalledWith('Cuenta eliminada');
    expect(window.location.href).toBe('/');
  });
});
