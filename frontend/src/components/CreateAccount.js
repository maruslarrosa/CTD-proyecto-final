import styles from '../styles/form.module.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { UsePasswordValidation } from '../hooks/UsePasswordValidation';
import { UseEmailValidation } from '../hooks';
import { useState } from 'react';

export const CreateAccount = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: ""
  })
  const [validLength, match] = UsePasswordValidation({
    password: passwords.password,
    confirmPassword: passwords.confirmPassword
  })

  const [email, setEmail] = useState("")
  const validEmail = UseEmailValidation(email)

  const setNewEmail = (event) => {
    setEmail(event.target.value)
  };
  const setPassword = (event) => {
    setPasswords({...passwords, password: event.target.value});
  }
  const setConfirmPassword = (event) => {
    setPasswords({...passwords, confirmPassword: event.target.value});
  }

  const submitForm = (event) => {
    if(!match) {
      event.preventDefault();
    }
  }

  return (
    <div className={styles.formContainer} onSubmit={submitForm}>
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
          onChange={setPassword}
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="******"
          autoComplete="new-password"
          label="Ingrese una contraseña"
          required={true}
        />
        {passwords.password ? (
          !validLength ? (
            <p className={styles.error}>La contraseña debe tener al menos 6 caracteres</p>
          ) : null
        ) : null}

        <label className={styles.label} htmlFor="confirmPassword">
          Confirmar contraseña
        </label>
        <input
          onChange={setConfirmPassword}
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="******"
          autoComplete="current-password"
          label="Ingrese nuevamente la contraseña para confirmar"
          required={true}
        />
        {passwords.confirmPassword ? (
          !match ? (
            <p className={styles.error}>Las contraseñas no coinciden</p>
          ) : null
        ) : null}
        <Button text="Crear cuenta" label="Crear cuenta" color="primary" />
        <h5 className={styles.text}>
          ¿Ya tenés una cuenta?
          <Link to="/login">Iniciar sesión</Link>
        </h5>
      </form>
    </div>
  );
}