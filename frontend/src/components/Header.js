import styles from '../styles/header.module.css';
import { useState, useContext, useEffect } from 'react'
import { Button, RightNav, Hamburguer } from './index';
import { logoLarge, logoSmall, menu } from '../assets/index'
import { GlobalContext } from '../GlobalContext';
import { Link  } from 'react-router-dom'


export const Header = () => {
  const isMobile = useContext(GlobalContext)

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src={isMobile ? logoSmall : logoLarge} alt="Logo digital booking"/>
      </div>
      {isMobile ? <Hamburguer /> : <RightNav />}
      
    </div>
  )
};
