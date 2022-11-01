import styles from '../styles/rightNav.module.css';
import { Button } from './Button';

export const RightNav = ({open}) => {

    return (
      <ul className={styles.buttonContainer}>
        <Button text="Iniciar sesión" label="Botón para iniciar sesión" color="primary"/>
        <Button text="Crear cuenta" label="Botón para crear cuenta" color="primary"/>
      </ul>
    );
}