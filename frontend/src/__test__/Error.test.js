import { Error } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
//import { is } from "date-fns/locale";

describe('Error', () => {

    test('Renderizado del componente Error', () => {

        const error = 'Esto es un error';

        render(<Error text={error}/>);

        expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
})