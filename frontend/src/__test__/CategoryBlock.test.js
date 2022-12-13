import { CategoryBlock } from "../components";
import React from "react";
import { render, screen } from '@testing-library/react';

describe('CategoryBlock', ()=>{

    const category = {
        
            id: 1,
            name: "Hotel",
            description: "Gran hotel",
            url: "https://image-bucket-g7-pggi.s3.us-east-2.amazonaws.com/estacionamiento.png"
        
    }

    test('Componente CategoryBlock', ()=>{
        render(<CategoryBlock category={category}/>);

        expect(screen.getByText('Hotel')).toBeInTheDocument();
    });
});