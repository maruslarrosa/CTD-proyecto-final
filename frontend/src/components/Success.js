import { check } from '../assets/index.js'
import styles from '../styles/success.module.css'
import { Button } from './index.js'
import { useNavigate  } from 'react-router-dom'

export const Success = () => {
    const navigate = useNavigate()
    return (
      <div className={styles.successContainer}>
        <div className={styles.successContent}>
          <img src={check} />
          <h2>¡Muchas Gracias!</h2>
          <p>Su reserva se ha realizado con éxito.</p>
          <div onClick={() => navigate("/")}>
            <Button
              text="volver al home"
              label="Regresar al inicio"
              color="secondary"
            />
          </div>
        </div>
      </div>
    );
}