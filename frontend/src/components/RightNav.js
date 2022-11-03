import { useState, useEffect } from 'react';
import styles from '../styles/rightNav.module.css';
import { Button } from './Button';
import { useLocation, Link } from 'react-router-dom';

export const RightNav = () => {
  const [showLogin, setShowLogin] = useState(true)
  const [showCreateAccount, setShowCreateAccount] = useState(true)
  let location = useLocation().pathname;

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

    return (
      <ul className={styles.buttonContainer}>
        {showLogin ? (
          <Link to="/login">
            <Button
              text="Iniciar sesión"
              label="Botón para iniciar sesión"
              color="primary"
            ></Button>
          </Link>
        ) : null}
        {showCreateAccount ? (
          <Link to="/create-account">
            <Button
              text="Crear cuenta"
              label="Botón para crear cuenta"
              color="primary"
            />
          </Link>
        ) : null}
      </ul>
    );
}