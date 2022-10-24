import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateAccount, Footer, Header, Login, Main } from './components'

function App() {
  
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowResizing() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResizing);
    return () => {
      window.removeEventListener("resize", handleWindowResizing);
    };
  });

  const isMobile = width <= 768;
  return (
    <div className="App">
      <Header isMobile={isMobile}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/create-account" element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
      <Footer isMobile={isMobile}/>
    </div>
  );
}

export default App;
