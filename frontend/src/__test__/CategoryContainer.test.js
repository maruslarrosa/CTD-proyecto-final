import { CategoryContainer } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
import "../styles/footer.module.css";
//import { is } from "date-fns/locale";

describe('CategoryContainer', () => {

    test('Renderizado del componente CategoryContainer', () => {
        render(<CategoryContainer />);

        expect(screen.getByText('Buscar por tipo de alojamiento')).toBeInTheDocument();
    });
})