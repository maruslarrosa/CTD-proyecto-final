import { Footer } from "../components";
import React from "react";
import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
import "../styles/footer.module.css";
import { is } from "date-fns/locale";

describe('Footer', ()=>{
    const isMobile = true;
    test('Renderizado del componente Footer', ()=>{

        render(<GlobalContext.Provider
            value= {{
                isMobile: isMobile
            }}>
                <Footer />

        </GlobalContext.Provider>);

        screen.getByText('© Digital Booking 2022');
    });
});