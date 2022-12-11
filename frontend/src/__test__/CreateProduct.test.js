import React from "react";
import { CreateProduct } from "../components/CreateProduct";
import { render, screen } from '@testing-library/react';

const setup = () => render(<CreateProduct />)

describe('CreateProduct', ()=>{

    test('Renderizado de CreateProduct', ()=>{
        setup();

        expect(screen.getByText(/Crear propiedad/)).toBeInTheDocument();

    });

    
})