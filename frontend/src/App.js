import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking, CreateAccount, CreateProduct, Footer, Header, Login, Main, Product, Success } from './components'
import { GlobalContext } from './GlobalContext';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isFromBooking, setIsFromBooking] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowResizing() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResizing);
    return () => {
      window.removeEventListener("resize", handleWindowResizing);
    };
  },[]);

  useEffect(() => {
    const token = window.sessionStorage.getItem('bookingUser');
    setIsLogged(!!token)
  },[isLogged])

  const isMobile = width <= 500;
  const isTablet = width <= 820;
  
  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          isMobile: isMobile,
          isTablet: isTablet,
          logged: [isLogged, setIsLogged],
          fromBooking: [isFromBooking, setIsFromBooking],
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/product/:data" element={<Product />} />
            <Route path="/product/:data/booking" element={<Booking />} />
            <Route path='/create-product' element={<CreateProduct />}/>
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer isMobile={isMobile} />
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
