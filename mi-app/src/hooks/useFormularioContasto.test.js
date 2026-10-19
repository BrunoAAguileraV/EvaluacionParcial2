import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useFormularioContacto from './useFormularioContacto.js';

describe('Hook personalizado useFormularioContacto', () => {
    it('debe inicializar el estado enviando en false', () => {
        const { result } = renderHook(() => useFormularioContacto());

        expect(result.current.enviando).toBe(false);
        expect(result.current.formulario).toBeDefined();
    });

    it('debe cambiar el estado enviando a true al disparar manejarEnvio', () => {
        const { result } = renderHook(() => useFormularioContacto());

        act(() => {
            result.current.manejarEnvio({
                nombre: 'Juan Pérez',
                correo: 'juan@correo.com',
                mensaje: 'Hola Bruno, me interesa tu perfil',
            });
        });

        expect(result.current.enviando).toBe(true);
    });
});