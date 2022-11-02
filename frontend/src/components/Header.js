import styles from '../styles/header.module.css';
import { useState, useContext } from 'react'
import { Button, Menu } from './index';
import { logoLarge, logoSmall, menu } from '../assets/index'
import { GlobalContext } from '../GlobalContext';

export const Header = () => {
  const isMobile = useContext(GlobalContext)
  const [menuVisibility, setMenuVisibility] = useState(false);

  const renderUserButtons = () => {
    return (
      <>
        <Button
          text={"Crear cuenta"}
          label={"Botón para crear cuenta"}
          color={"primary"}
        />
        <Button
          text={"Login"}
          label={"Botón para iniciar sesión"}
          color={"primary"}
        />
      </>
    );
  };

  const renderMobileButtons = () => {
    return (
      <div onClick={() => setMenuVisibility(!menuVisibility)}>
        <img
          src={menu}
          alt="Menu para ver opciones de usuario"
        />
      </div>
    );
  };

  return (
    <>
      {menuVisibility ? (
        <Menu />
      ) : (
        <div className={styles.header}>
          <img
            src={isMobile ? logoSmall : logoLarge}
            className={styles.logo}
            alt="Logo digital bookign"
          />
          <div className={styles.buttonContainer}>
            {isMobile ? renderMobileButtons() : renderUserButtons()}
          </div>
        </div>
      )}
    </>
  );
};
