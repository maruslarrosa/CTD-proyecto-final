import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ProductHeader } from '../components';
import '@testing-library/jest-dom'


const setup = () => render(
    <BrowserRouter>
        <ProductHeader categoryId="1" name="Hotel Brasil" />
    </BrowserRouter>
);

describe("Pruebas en <ProductHeader />", () => {

    test("Ícono para volver", async () => {
        setup()

        const icono = screen.getByAltText("Volver al listado de productos")
        expect(icono).toBeInTheDocument()

        expect(screen.getByText("Hotel Brasil")).toBeInTheDocument()
        expect(screen.getByText(/Hoteles/i)).toBeInTheDocument()

    });
});