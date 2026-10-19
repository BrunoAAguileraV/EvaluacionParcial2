import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TituloSeccion from '../components/atoms/TituloSeccion.jsx';

describe('Componente Atómico TituloSeccion', () => {
    it('debe mostrar el título y el subtítulo correctamente', () => {

        render(<TituloSeccion titulo="Proyectos Destacados" subtitulo="Galería de trabajos" />);


        const titulo = screen.getByText('Proyectos Destacados');
        const subtitulo = screen.getByText('Galería de trabajos');

        expect(titulo).toBeInTheDocument();
        expect(subtitulo).toBeInTheDocument();
    });
});