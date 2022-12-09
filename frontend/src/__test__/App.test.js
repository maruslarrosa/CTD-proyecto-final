import { render } from '@testing-library/react';
import App from '../App';


describe ('App', ()=>{
    test ('La app se renderiza correctamente', ()=>{
        const app = render(<App />);
        expect(app.container).toBeInTheDocument;

    });

});