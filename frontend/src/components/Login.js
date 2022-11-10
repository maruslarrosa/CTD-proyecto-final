import styles from '../styles/form.module.css'
import { Button } from './Button';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom'
import { UseEmailValidation } from '../hooks';

const userModel = {
  email: 'test@test.com',
  password: '123456'
}

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const validEmail = UseEmailValidation(email);
  const setNewEmail = (event) => {
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault()
    const correctEmail = event.target.email.value === userModel.email
    const correctPassword = event.target.password.value === userModel.password
    if(correctEmail && correctPassword) {
      setInvalidCredentials(false)
      navigate("/")
    }
    else {
      setInvalidCredentials(true)
    }
  }

  return (
    <div className={styles.formContainer} onSubmit={login}>
      <h3 className={styles.text}>Iniciar sesión</h3>
      {invalidCredentials ? (
        <p className={styles.error}>
          Los datos ingresados son incorrectos, intentá nuevamente.
        </p>
      ) : null}
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
          onBlur={setNewEmail}
        />
        {email ? (
          !validEmail ? (
            <p className={styles.error}>
              El email debe tener el formato email@email.com
            </p>
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
        <Button text="Ingresar" label="Ingresar" color="primary" />
      </form>
    </div>
  );
}