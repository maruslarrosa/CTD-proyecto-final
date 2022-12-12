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

describe('Hamburguer', ()=>{
    
    test('Renderizado de Hamburger cerrado', ()=>{
        setup()
        
        expect(screen.getByAltText(/Menu de opciones/i)).toBeInTheDocument();

    });

    test('Renderizado de Hamburger abierto', ()=>{
        setup();
       
        const menuOpciones = screen.getByAltText(/Menu de opciones/i)
        userEvent.click(menuOpciones)
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
     

    });
});