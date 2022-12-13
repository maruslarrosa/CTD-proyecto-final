import React from "react";
import { Availability } from "../components/Availability";
import { render, screen } from '@testing-library/react';
import { GlobalContext } from "../GlobalContext";

const setup = () => render(<GlobalContext.Provider
    value ={{ logged: true,
            fromBooking: true,
            isMobile: true }} >
    <Availability />
</GlobalContext.Provider>);

describe('Availability', ()=>{

    test('Renderizado de componente Availability', ()=>{
        setup();
        
        screen.debug();
        expect(screen.getByText(/Agregá tus fechas de viaje para obtener precios exactos/i)).toBeInTheDocument();
    }); 
});