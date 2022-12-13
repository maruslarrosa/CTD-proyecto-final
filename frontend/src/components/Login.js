import styles from '../styles/form.module.css'
<<<<<<< HEAD
import { Button } from './Button';
import { useState } from 'react';
import { UseEmailValidation } from '../hooks';

const userModel = {
  email: 'test@test.com',
  password: '123456'
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const validEmail = UseEmailValidation(email);
=======
import { Button, Error } from './index';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UseEmailValidation } from '../hooks';
import { GlobalContext } from '../GlobalContext';

export const Login = () => {
  const {logged, fromBooking} = useContext(GlobalContext)
  const [,setIsLogged] = logged
  const [isFromBooking, setIsFromBooking] = fromBooking
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const validEmail = UseEmailValidation(email)

>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
  const setNewEmail = (event) => {
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault()
<<<<<<< HEAD
    debugger
    const correctEmail = event.target.email.value === userModel.email
    const correctPassword = event.target.password.value === userModel.password
    if(correctEmail && correctPassword) {
      setInvalidCredentials(false)
    }
    else {
      setInvalidCredentials(true)
    }
  }

  return (
    <div className={styles.formContainer} onSubmit={login}>
=======
    // const correctEmail = event.target.email.value === userModel.email
    // const correctPassword = event.target.password.value === userModel.password
      // setInvalidCredentials(false)
      // window.sessionStorage.setItem('bookingUser', 'Marilina Larrosa')
      // const url = isFromBooking ? -1 : "/"
      // navigate(url)
      // setIsLogged(true)
      // setIsFromBooking(false)
      debugger
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      fetch(
        "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/auth/auth",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          debugger
          console.log(data);
          window.sessionStorage.setItem('bookingUser', data.respuesta.token)
          const url = isFromBooking ? -1 : "/"
          navigate(url)
          setIsLogged(true)
          setIsFromBooking(false)
        });
    }



  return (
    <div className={styles.formContainer} onSubmit={login}>
      {isFromBooking ? (
        <Error text="Para realizar una reserva necesitas estar logueado" />
      ) : null}
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
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
<<<<<<< HEAD
          onChange={setNewEmail}
=======
          onBlur={setNewEmail}
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
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
<<<<<<< HEAD
        <Button text="Crear cuenta" label="Ingresar" color="primary" />
=======
        <Button text="Ingresar" label="Ingresar" color="primary" />
        <h5 className={styles.text}>
          ¿Aún no tenés cuenta?
          <Link to="/create-account">Registrate</Link>
        </h5>
>>>>>>> c4e1ced1b1da590fb4e94f7e37a222c401d8e372
      </form>
    </div>
  );
}