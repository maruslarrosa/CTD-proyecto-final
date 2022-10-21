import styles from '../styles/header.module.css'
import { Button } from './Button'
//import logoSmall from '../assets/logoSmall.png'
import logoLarge from '../assets/logoLarge.png'


export const Header = () => {
    return (
      <div className={styles.header}>
        {/* TODO: este va cuando el breakpoint es menor a 900px
        <img className={styles.logo} src={logoSmall} /> */}
        <img src={logoLarge} className={styles.logo} alt="Logo digital bookign"/>
        <div className={styles.buttonContainer}>
          <Button text={"Crear cuenta"} label={"Botón para crear cuenta"} color={"primary"}/>
          <Button text={"Login"} label={"Botón para iniciar sesión"} color={"primary"}/>
        </div>
      </div>
    );
}