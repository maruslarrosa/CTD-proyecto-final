import React from "react";
import { render, screen } from '@testing-library/react';
import { Booking } from "../components";
import { GlobalContext } from "../GlobalContext";
import { BrowserRouter } from "react-router-dom";

const setup = () => render(<GlobalContext.Provider
    value={{
        isMobile: true
    }}>

    <BrowserRouter>
        <Booking />
    </BrowserRouter>
    
</GlobalContext.Provider>)

describe('Booking', ()=>{
    test('Renderizado de componente Booking', ()=>{
        setup();

        expect(screen.getByText(/cargando/i)).toBeInTheDocument();
    }) 
})