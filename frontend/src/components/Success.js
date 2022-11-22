import { check } from '../assets/index.js'
import styles from '../styles/success.module.css'
import { Button } from './index.js'
import { Link  } from 'react-router-dom'

export const Success = () => {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <img src={check} />
          <h2>¡Muchas Gracias!</h2>
          <p>Su reserva se ha realizado con éxito.</p>
          <Link to="/">
            <Button
              text="volver al home"
              label="Regresar al inicio"
              color="secondary"
            />
          </Link>
        </div>
      </div>
    );
}