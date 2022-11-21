import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking, CreateAccount, Footer, Header, Login, Main, Product, Success } from './components'
import { GlobalContext } from './GlobalContext';

function App() {
  const [isLogged, setIsLogged] = useState(false)
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

  const isMobile = width <= 500;
  return (
    <div className="App">
      <GlobalContext.Provider value={{isMobile: isMobile, logged:[isLogged, setIsLogged]}}>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/product" element={<Product />}/>
            <Route path="/booking" element={<Booking />}/>
            <Route path="/success" element={<Success />}/>
          </Routes>
        <Footer isMobile={isMobile} />
        </BrowserRouter>

      </GlobalContext.Provider>
    </div>
  );
}

export default App;
