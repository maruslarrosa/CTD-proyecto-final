import React from "react";
import { render, screen } from '@testing-library/react';
import { Calification } from "../components";

const setup = () => render(<Calification 
    calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
/>)

describe('Calification', ()=>{
    test('Renderizdo de componente Calification', ()=>{
        setup ();

        expect(screen.getByText(/muy bueno/i)).toBeInTheDocument();
    });
})