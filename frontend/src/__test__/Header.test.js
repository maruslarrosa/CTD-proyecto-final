import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../components';
import { GlobalContext } from '../GlobalContext';
import '../styles/header.module.css';

// describe('Header', ()=>{
//     const isMobile = true;
//     const logged = true;

//     test('Renderizado del componente Header', ()=>{
//         const header = render(<GlobalContext.Provider
//             value = {{
//                 isMobile: isMobile,
//                 isLogged: logged
//             }}>

//                 <Header />
//         </GlobalContext.Provider>);


//         expect(header.container).toBeInTheDocument();
//     });
// });