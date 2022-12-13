import styles from '../styles/form.module.css'
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

  const setNewEmail = (event) => {
    setEmail(event.target.value);
  };

  const login = (event) => {
    event.preventDefault()
    // const correctEmail = event.target.email.value === userModel.email
    // const correctPassword = event.target.password.value === userModel.password
      // setInvalidCredentials(false)
      // window.sessionStorage.setItem('bookingUser', 'Marilina Larrosa')
      // const url = isFromBooking ? -1 : "/"
      // navigate(url)
      // setIsLogged(true)
      // setIsFromBooking(false)
      
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
        <h5 className={styles.text}>
          ¿Aún no tenés cuenta?
          <Link to="/create-account">Registrate</Link>
        </h5>
      </form>
    </div>
  );
}