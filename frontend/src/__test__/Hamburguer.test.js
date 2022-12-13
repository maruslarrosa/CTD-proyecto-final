import { Hamburguer } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';

const setup = () => render(
    <BrowserRouter>
        <Hamburguer />
    </BrowserRouter>
)

describe('Hamburguer', () => {

    test('Renderizado de Hamburger cerrado', () => {
        setup()

        expect(screen.getByAltText(/Menu de opciones/i)).toBeInTheDocument();

    });

    test('Renderizado de Hamburger abierto', () => {
        setup();

        const menuOpciones = screen.getByAltText(/Menu de opciones/i)
        userEvent.click(menuOpciones)
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();

    });

    test('Ir a Crear cuenta desde Hambuguer', async () => {
        setup();

        const menuOpciones = screen.getByAltText(/Menu de opciones/i)
        userEvent.click(menuOpciones)
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();

        const loginBtn = screen.getByTestId("btn-login")

        userEvent.click(loginBtn)
        userEvent.click(screen.getByAltText(/Menu de opciones/i))  
        
        expect(screen.getByText("Crear cuenta")).toBeInTheDocument() 
        expect(loginBtn).not.toBeInTheDocument() 
    });

    test('Ir a Login desde Hambuguer', async () => {
        setup();

        const menuOpciones = screen.getByAltText(/Menu de opciones/i)

        userEvent.click(menuOpciones)
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();

        const createAccountBtn = screen.getByTestId("btn-signup")
        expect(createAccountBtn).toBeInTheDocument()

        userEvent.click(createAccountBtn)
        userEvent.click(screen.getByAltText(/Menu de opciones/i))  
        
        expect(screen.getByText("Iniciar sesión")).toBeInTheDocument() 
        expect(createAccountBtn).not.toBeInTheDocument() 
    });

    test('Abrir y cerrar Hambuguer', async () => {
        setup();

        const menuOpciones = screen.getByAltText(/Menu de opciones/i)
        
        userEvent.click(menuOpciones)
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
        
        const cerrarmenuOpciones = screen.getByAltText(/Cerrar menu de opciones/i)
        userEvent.click(cerrarmenuOpciones)

        expect(screen.queryByText(/Menu/i)).not.toBeInTheDocument();

    });

});