import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DatosPersonales from './DatosPersonales.jsx';

describe('Organismo DatosPersonales (Quién soy)', () => {
    const perfilMock = {
        nombre: 'Bruno Aguilera V.',
        titulo: 'Estudiante de Analista Programador',
        ubicacion: 'Santiago, Chile',
        descripcion: 'Estudiante de software enfocado en React y Java.',
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Bruno',
        habilidadesTecnicas: ['Java', 'React', 'SQL'],
        habilidadesBlandas: ['Trabajo en equipo'],
        idiomas: ['Español (Nativo)', 'Inglés (C1+)'],
    };

    it('debe renderizar el nombre del desarrollador y su titulación', () => {
        // ARRANGE + ACT
        render(<DatosPersonales perfil={perfilMock} />);

        // ASSERT
        expect(screen.getByText('Bruno Aguilera V.')).toBeInTheDocument();
        expect(screen.getByText('Estudiante de Analista Programador')).toBeInTheDocument();
        expect(screen.getByText(/Santiago, Chile/i)).toBeInTheDocument();
    });

    it('debe mostrar las etiquetas de tecnologías e idiomas', () => {
        // ARRANGE + ACT
        render(<DatosPersonales perfil={perfilMock} />);

        // ASSERT
        expect(screen.getByText('Java')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Inglés (C1+)')).toBeInTheDocument();
    });
});