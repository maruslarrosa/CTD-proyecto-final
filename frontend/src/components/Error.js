import { error } from '../assets/index.js'
import styles from '../styles/error.module.css'

export const Error = ({text}) => {
    const errorText = `Error: ${text}`
    return (
      <div className={styles.errorContainer}>
        <img className={styles.icon} src={error} alt="icono de error" />
        <p className={styles.errorText}>{errorText}</p>
      </div>
    );
}