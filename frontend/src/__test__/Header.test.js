import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '../components';
import { GlobalContext } from '../GlobalContext';
import '../styles/header.module.css';

describe('Header', ()=>{
    test('Renderizado del componente header', ()=>{
        const header = <Header />
        expect(header.container).toBeInTheDocument;
                
    })
    
});