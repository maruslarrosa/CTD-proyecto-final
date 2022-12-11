import { Politics } from '../components';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
// import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import React from 'react';

const setup = () => render(
    <BrowserRouter>
        <Politics />
    </BrowserRouter>
);

describe("Pruebas en <Politics />", () => {

    test('Renderizado del título', () => {
        setup()

        expect(screen.getByRole('heading', { name: /Qué tenés que saber/i })).toBeInTheDocument()
    });

    test('Políticas de "Normas de la casa"', () => {
        setup()

        expect(screen.getByRole('heading', { name: /Normas de la casa/i })).toBeInTheDocument()
        expect(screen.getByText('Check-out')).toBeInTheDocument()
        expect(screen.getByText('No se permiten fiestas')).toBeInTheDocument()
        expect(screen.getByText('No fumar')).toBeInTheDocument()
    });

    test('Políticas de "Salud y seguridad"', () => {
        setup()

        expect(screen.getByRole('heading', { name: /Salud y seguridad/i })).toBeInTheDocument()
        expect(screen.getByText('Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus')).toBeInTheDocument()
    });

    test('Políticas de "Política de cancelación"', () => {
        setup()

        expect(screen.getByRole('heading', { name: /Política de cancelación/i })).toBeInTheDocument()
        expect(screen.getByText('Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.')).toBeInTheDocument()
    });

});