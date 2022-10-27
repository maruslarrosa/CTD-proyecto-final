import styles from '../styles/header.module.css';
import { useState, useContext, useEffect } from 'react'
import { Button, Menu } from './index';
import { logoLarge, logoSmall, menu } from '../assets/index'
import { GlobalContext } from '../GlobalContext';
import { Link  } from 'react-router-dom'


export const Header = () => {
  const isMobile = useContext(GlobalContext)
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    console.log(menuVisibility)

  },[menuVisibility])

  const renderUserButtons = () => {
    return (
      <div className={styles.userButtonContainer}>
        <Link to="/create-account" style={{textDecoration: 'none'}}>
          <Button
            text={"Crear cuenta"}
            label={"Botón para crear cuenta"}
            color={"primary"}
          />
        </Link>
        <Link to="/login" style={{textDecoration: 'none'}}>
          <Button
            text={"Login"}
            label={"Botón para iniciar sesión"}
            color={"primary"}
          />
        </Link>
      </div>
    );
  };

  const renderMobileButtons = () => {
    return (
      <div onClick={handleMenuVisibility}>
        <img
          src={menu}
          alt="Menu para ver opciones de usuario"
        />
      </div>
    );
  };

  const handleMenuVisibility = () => {
    // console.log(menuVisibility)
    setMenuVisibility(!menuVisibility)
    // console.log(menuVisibility)

  }
  return (
    <>
      {menuVisibility ? (
        <Menu onClosed={()=>setMenuVisibility(false)}/>
      ) : (
        <div className={styles.header}>
          <Link to="/">
            <img
              src={isMobile ? logoSmall : logoLarge}
              className={styles.logo}
              alt="Logo digital bookign"
            />
          </Link>
          <div className={styles.buttonContainer}>
            {isMobile ? renderMobileButtons() : renderUserButtons()}
          </div>
        </div>
      )}
    </>
  );
};
