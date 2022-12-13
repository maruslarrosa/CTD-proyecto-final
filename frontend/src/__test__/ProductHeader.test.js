import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ProductSubHeader } from '../components';
import '@testing-library/jest-dom'


const setup = () => render(
    <BrowserRouter>
        <ProductSubHeader productId="1" city="Rio de Janeiro" />
    </BrowserRouter>
);

describe("Pruebas en <Success />", () => {

    test("Ícono para volver", async () => {
        setup()

        const icono = screen.getByAltText("Icono de ubicación")
        expect(icono).toBeInTheDocument()
    });
});