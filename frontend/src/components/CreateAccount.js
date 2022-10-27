import styles from '../styles/form.module.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const CreateAccount = () => {
  
  const validateForm = (e) => {
    debugger
  }
  
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.text}>Crear cuenta</h3>
      <form className={styles.customForm}>
        <label className={styles.label} htmlFor="name">
          Nombre
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required={true}
          aria-describedby="Ingrese su nombre"
        />
        <label className={styles.label} htmlFor="lastname">
          Apellido
        </label>
        <input
          className={styles.input}
          type="text"
          id="lastname"
          name="lastname"
          autoComplete="family-name"
          required={true}
          aria-describedby="Ingrese su apellido"
        />
        <label className={styles.label} htmlFor="email">
          Correo electrónico
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="ejemplo@ejemplo.com"
          autoComplete="email"
          required={true}
        />
        <label className={styles.label} htmlFor="password">
          Contraseña
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="******"
          autoComplete="new-password"
          label="Ingrese una contraseña"
          required={true}
        />
        <label className={styles.label} htmlFor="confirmpassword">
          Confirmar contraseña
        </label>
        <input
          className={styles.input}
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="******"
          autoComplete="current-password"
          label="Ingrese nuevamente la contraseña para confirmar"
          required={true}
        />
        <Button
          text="Crear cuenta"
          label="Crear cuenta"
          color="primary"
          onClick={validateForm}
        />
        <h5 className={styles.text}>
          ¿Ya tenés una cuenta?
          <Link to="/login">Iniciar sesión</Link>
        </h5>
      </form>
    </div>
  );
}