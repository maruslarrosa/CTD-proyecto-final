import styles from '../styles/form.module.css'
import { Button } from './Button';
import { useState } from 'react';
import { UseEmailValidation } from '../hooks';

export const Login = () => {
  const [email, setEmail] = useState("");
  const validEmail = UseEmailValidation(email);
  const setNewEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.text}>Iniciar sesión</h3>
      <form className={styles.customForm}>
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
          onChange={setNewEmail}
        />
        {email ? (
          !validEmail ? (
            <p className={styles.error}>El email debe tener el formato email@email.com</p>
          ) : null
        ) : null}
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
        <Button text="Crear cuenta" label="Ingresar" color="primary" />
      </form>
    </div>
  );
}