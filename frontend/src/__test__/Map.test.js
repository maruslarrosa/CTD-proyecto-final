import React from "react";
import { render, screen } from '@testing-library/react';
import { Map } from "../components";
import { GlobalContext } from "../GlobalContext";
import { BrowserRouter } from "react-router-dom";

const setup = () => render(<Map />)

describe('Map', ()=>{
    test('Renderizado de componente Map', ()=>{
        setup();

        expect(screen.getByAltText(/MapTablet/i)).toBeInTheDocument();
    }) 
})