import { Characteristics } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
//import { is } from "date-fns/locale";

describe('Characteristics', () => {

    const caracts = [
        {
            id: 1,
            name: "Desayuno",
            iconUrl: "https://image-bucket-g7-pggi.s3.us-east-2.amazonaws.com/desayuno.png"
        },
        {
            id: 2,
            name: "Estacionamiento",
            iconUrl: "https://image-bucket-g7-pggi.s3.us-east-2.amazonaws.com/estacionamiento.png"
        },
    ];

    test('Renderizado del componente Characteristics', () => {
        render(<Characteristics characteristics={caracts} />);

        expect(screen.getByText('Desayuno')).toBeInTheDocument();
        expect(screen.getByText(/¿Qué ofrece este lugar?/)).toBeInTheDocument();
    });

});