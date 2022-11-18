import styles from '../styles/hamburguer.module.css'
import { close, hamburguer } from '../assets'
import { Button } from './index'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Hamburguer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true)
  const [showCreateAccount, setShowCreateAccount] = useState(true)
  let location = useLocation().pathname;

  const goTo = (path) => {
    setOpen(false)
    navigate(path)
  }

  useEffect(() => {
    if (location === '/create-account') {
      setShowCreateAccount(false)
      setShowLogin(true)
    } else if (location === '/login') {
      setShowLogin(false);
      setShowCreateAccount(true);
    } else {
      setShowLogin(true);
      setShowCreateAccount(true);
    }
  }, [location]);

  const renderMenu = () => {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.topContainer}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <img
            className={styles.close}
            src={close}
            alt="Cerrar menu de opciones"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div>
          <ul className={styles.buttonContainer}>
            {showLogin ? (
              <div onClick={() => goTo("/login")}>
                <Button
                  text="Iniciar sesión"
                  label="Botón para iniciar sesión"
                  color="primary"
                  o
                ></Button>
              </div>
            ) : null}
            {showCreateAccount ? (
              <div onClick={()=> goTo("/create-account")}>
                <Button
                  text="Crear cuenta"
                  label="Botón para crear cuenta"
                  color="primary"
                  onClick={() => setOpen(!open)}
                />
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      {
        open ? renderMenu() : 
        <img src={hamburguer} alt="Menu de opciones" 
          onClick={() => setOpen(!open)}/>
      }
        
    </>
  );
}