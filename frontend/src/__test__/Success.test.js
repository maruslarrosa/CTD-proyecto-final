import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Component } from 'react';
import { Success } from '../components';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
// import { create } from 'react-test-renderer';

const setup = () => render(
    <BrowserRouter>
        <Success />
    </BrowserRouter>
);

describe("Pruebas en <Success />", () => {

    test("Mensajes de éxito", async () => {
        setup()

        expect(screen.getByRole('heading', { name: /¡muchas gracias!/i })).toBeInTheDocument()
        expect(screen.getByText('Su reserva se ha realizado con éxito.')).toBeInTheDocument()
    });

});