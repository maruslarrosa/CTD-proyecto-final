import { CreateProduct } from "../components";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { GlobalContext } from "../GlobalContext";
import userEvent from "@testing-library/user-event";
//import { is } from "date-fns/locale";

const setup = () => render(<CreateProduct />)

describe('CreateProduct', () => {

    test('Renderizado del componente CreateProduct', async () => {
        setup();

        expect(screen.getByText('Crear propiedad')).toBeInTheDocument();
        expect(screen.getByText('Cargando')).toBeInTheDocument();
        await waitFor(() => expect(screen.queryByText("Nombre de la propiedad")));
        await waitFor(() => expect(screen.queryByText("Categoría")));
        await waitFor(() => expect(screen.queryByText("Dirección")));
        await waitFor(() => expect(screen.queryByText("Ciudad")));
        await waitFor(() => expect(screen.queryByText("Descripción")));
        await waitFor(() => expect(screen.queryByText("Características")));
        await waitFor(() => expect(screen.queryByText("Políticas del producto")));
        await waitFor(() => expect(screen.queryByText("Salud y seguridad")));
        await waitFor(() => expect(screen.queryByText("Políticas de cancelación")));

        await screen.debug()
    });



})