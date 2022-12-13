import { check } from '../assets/index.js'
import styles from '../styles/success.module.css'
import { Button } from './index.js'
import { Link  } from 'react-router-dom'
import { useEffect } from 'react'

export const Success = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <img src={check} />
          <h2>¡Muchas Gracias!</h2>
          <p>Su reserva se ha realizado con éxito.</p>
          <Link to="/">
            <Button
              text="Volver al home"
              label="Regresar al inicio"
              color="secondary"
            />
          </Link>
        </div>
      </div>
    );
}