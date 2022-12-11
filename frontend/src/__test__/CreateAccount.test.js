import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Component } from 'react';
import { CreateAccount } from '../components/CreateAccount';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Login } from '../components';
import { GlobalContext } from '../GlobalContext';
// import { create } from 'react-test-renderer';

const setup = () => render(
    <BrowserRouter>
        <CreateAccount />
    </BrowserRouter>
);

describe("Pruebas en <CreateAccount />", () => {

    test("Título de página renderizado", async () => {
        setup()
        expect(screen.getByRole('heading', { name: /crear cuenta/i })).toBeInTheDocument()
    });

    test('Inputs vacíos', async () => {
        setup()
        // Obtenemos los elementos necesarios para el test
        const nameInput = screen.getByLabelText('Nombre')
        const lastNameInput = screen.getByLabelText('Apellido')
        const emailInput = screen.getByPlaceholderText("ejemplo@ejemplo.com")
        const passwordInput = screen.getByLabelText('Contraseña')
        const passwordConfirmInput = screen.getByLabelText('Confirmar contraseña')

        // Los inputs deberian estar vacíos
        expect(nameInput.value).toBe('');
        expect(lastNameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
        expect(passwordConfirmInput.value).toBe('');
    });

    test('Funcionamiento del mensaje de error en el input "Email"', () => {
        setup()

        // Obtenemos los elementos necesarios para el test
        const emailInput = screen.getByPlaceholderText("ejemplo@ejemplo.com")
        const createAccountBtn = screen.getByRole('button', { name: /crear cuenta/i })

        // 1. Escribimos en el input email
        expect(emailInput.value).toBe('');
        userEvent.type(emailInput, '123')

        // 2. Click en boton 'Crear cuenta' para lanzar error
        userEvent.click(createAccountBtn)

        expect(emailInput).toHaveValue('123');
        expect(screen.getByText('El email debe tener el formato email@email.com')).toBeInTheDocument()
    });

    test('Funcionamiento del mensaje de error en el input "Contraseña"', () => {
        setup()
        // Obtenemos los elementos necesarios para el test
        const passwordInput = screen.getByLabelText('Contraseña')
        const createAccountBtn = screen.getByRole('button', { name: /crear cuenta/i })

        // 1. Escribimos en el input contraseña
        expect(passwordInput.value).toBe('');
        userEvent.type(passwordInput, 'rar')

        // 2. Click en boton 'Crear cuenta' para lanzar error
        userEvent.click(createAccountBtn)

        expect(passwordInput).toHaveValue('rar');
        expect(screen.getByText('La contraseña debe tener al menos 6 caracteres')).toBeInTheDocument()
    });

    test('Funcionamiento del mensaje de error en el input "Confirmar contraseña"', () => {
        setup()
        // Obtenemos los elementos necesarios para el test
        const passwordInput = screen.getByLabelText('Contraseña')
        const passwordConfirmInput = screen.getByLabelText('Confirmar contraseña')
        const createAccountBtn = screen.getByRole('button', { name: /crear cuenta/i })

        // 1. Escribimos en el input contraseña
        expect(passwordInput.value).toBe('');
        userEvent.type(passwordInput, '123456')

        // 2. Escribimos en input confirmar contraseña
        expect(passwordConfirmInput.value).toBe('');
        userEvent.type(passwordConfirmInput, '123456789')

        // 3. Click en boton 'Crear cuenta' para lanzar error
        userEvent.click(createAccountBtn)

        expect(screen.getByText('Las contraseñas no coinciden')).toBeInTheDocument()
    });


    test('Funcionamiento del formulario completo', async () => {
        setup()

        // Obtenemos los elementos necesarios para el test
        const nameInput = screen.getByLabelText('Nombre')
        const lastNameInput = screen.getByLabelText('Apellido')
        const emailInput = screen.getByPlaceholderText("ejemplo@ejemplo.com")
        const passwordInput = screen.getByLabelText('Contraseña')
        const passwordConfirmInput = screen.getByLabelText('Confirmar contraseña')
        const createAccountBtn = screen.getByRole('button', { name: /crear cuenta/i })

        // Tipeamos en cada input 
        userEvent.type(nameInput, 'Mob')
        userEvent.type(lastNameInput, 'Kageyama')
        userEvent.type(emailInput, 'mob@gmail.com')
        userEvent.type(passwordInput, '123456')
        userEvent.type(passwordConfirmInput, '123456')

        // testeamos que estén con el valor que se ingreso
        expect(nameInput).toHaveValue('Mob');
        expect(lastNameInput).toHaveValue('Kageyama');
        expect(emailInput).toHaveValue('mob@gmail.com');
        expect(passwordInput).toHaveValue('123456');
        expect(passwordConfirmInput).toHaveValue('123456');

       // userEvent.click(createAccountBtn)

        // render(
        //     <GlobalContext.Provider>
        //         <Login />
        //     </GlobalContext.Provider>
        // );

        // expect(screen.getByRole('heading', { name: /Iniciar sesión/i })).toBeInTheDocument()

    });

});