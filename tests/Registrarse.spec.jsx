// Importamos lo que necesitamos para los tests
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Registrarse from '../src/pages/Registrarse';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Página Registrarse', () => {
  // Antes de cada test, limpiamos localStorage
  beforeEach(() => {
    localStorage.clear();
    // Simulamos alert para que no aparezca ventana emergente en tests
    vi.stubGlobal('alert', vi.fn());
  });

  it('muestra el título Crear Cuenta', () => {
    render(<Registrarse />);
    expect(screen.getByText(/Crear Cuenta/i)).toBeInTheDocument();
  });

  it('tiene campos de nombre, email, contraseña y confirmar contraseña', () => {
    render(<Registrarse />);
    // Revisamos que cada campo exista en el formulario
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Contraseña$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirmar Contraseña/i)).toBeInTheDocument();
  });

  it('permite seleccionar rol Cliente o Trabajador', () => {
    render(<Registrarse />);
    const rolSelect = screen.getByLabelText(/Tipo de cuenta/i);
    expect(rolSelect).toBeInTheDocument();

    // Revisamos opciones
    expect(rolSelect).toHaveTextContent('Cliente');
    expect(rolSelect).toHaveTextContent('Trabajador');
  });

  it('guarda datos en localStorage al registrarse correctamente como Cliente', () => {
    render(<Registrarse />);
    
    fireEvent.change(screen.getByLabelText(/Nombre completo/i), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'juan@mail.com' } });
    fireEvent.change(screen.getByLabelText(/^Contraseña$/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/Confirmar Contraseña/i), { target: { value: '123456' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }));

    // Revisamos que se haya guardado en localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    expect(usuario.nombre).toBe('Juan Pérez');
    expect(usuario.email).toBe('juan@mail.com');
    expect(usuario.rol).toBe('Cliente');

    // Revisamos que alert fue llamado
    expect(alert).toHaveBeenCalledWith('Registro exitoso');
  });

  it('guarda datos en localStorage al registrarse correctamente como Trabajador', () => {
    render(<Registrarse />);

    // Seleccionamos rol Trabajador
    fireEvent.change(screen.getByLabelText(/Tipo de cuenta/i), { target: { value: 'Trabajador' } });

    // Ahora el select de tipoTrabajador aparece
    fireEvent.change(screen.getByLabelText(/Tipo de trabajador/i), { target: { value: 'Barbero' } });

    fireEvent.change(screen.getByLabelText(/Nombre completo/i), { target: { value: 'Ana López' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'ana@mail.com' } });
    fireEvent.change(screen.getByLabelText(/^Contraseña$/i), { target: { value: 'abcdef' } });
    fireEvent.change(screen.getByLabelText(/Confirmar Contraseña/i), { target: { value: 'abcdef' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Registrarse/i }));

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    expect(usuario.nombre).toBe('Ana López');
    expect(usuario.email).toBe('ana@mail.com');
    expect(usuario.rol).toBe('Trabajador');
    expect(usuario.tipoTrabajador).toBe('Barbero');

    expect(alert).toHaveBeenCalledWith('Registro exitoso');
  });
});
