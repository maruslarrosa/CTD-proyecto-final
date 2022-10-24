import styles from '../styles/header.module.css';
import { useState } from 'react'
import { Button, Menu } from './index';
import { logoLarge, logoSmall, menu } from '../assets/index'

export const Header = ({ isMobile }) => {

  const [menuVisibility, setMenuVisibility] = useState(false)

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
      {menuVisibility ? <Menu /> : null}
    </>
  );
};
