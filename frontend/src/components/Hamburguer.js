import styles from '../styles/hamburguer.module.css'
import { close, hamburguer } from '../assets'
import { RightNav } from './RightNav'
import { useState } from 'react'

export const Hamburguer = () => {
  const [open, setOpen] = useState(false);

  const renderMenu = () => {
    return (
      <div className={styles.menuContainer}>
        <img
          src={close}
          alt="Cerrar menu de opciones"
          onClick={() => setOpen(!open)}
        />

        <RightNav />
        <div className={styles.menuTitle}>Menu</div>
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