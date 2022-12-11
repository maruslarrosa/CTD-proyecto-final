import { CreateProduct } from "../components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
import "../styles/footer.module.css";
import userEvent from "@testing-library/user-event";
//import { is } from "date-fns/locale";

describe('CreateProduct', () => {

    test('Renderizado del componente CreateProduct', async () => {
        render(
            <CreateProduct />
        );

        expect(screen.getByText('Crear propiedad')).toBeInTheDocument();
        expect(screen.getByText('Cargando')).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByText("Nombre de la propiedad")));
        await waitFor(() => expect(screen.queryByText("Categoría")));
        await waitFor(() => expect(screen.queryByText("Dirección")));
        await waitFor(() => expect(screen.queryByText("Ciudad")));
    });


    // test('Renderizado del form', async () => {
    //     render(<CreateProduct />);

    //     await waitFor(() => {
    //         const categoryInput = screen.queryByLabelText('Categoría')
    //         expect(categoryInput).toHaveValue('');

    //     })
    // });

})