import { ProductList } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
import "../styles/footer.module.css";
//import { is } from "date-fns/locale";

describe('ProductList', () => {

    const isMobile = false;

    test('Renderizado del componente ProductList', () => {
        render(
            <GlobalContext.Provider
                value={{
                    isMobile: isMobile
                }}>
                <ProductList />
            </GlobalContext.Provider>
        );

        expect(screen.getByText('Buscar por tipo de alojamiento')).toBeInTheDocument();
    });
})