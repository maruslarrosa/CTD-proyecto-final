import styles from '../styles/user.module.css'
import { close } from '../assets'
import { useEffect, useState } from 'react'
import { useJwt } from "react-jwt";

export const User = ({ logout }) => {
  const [userName, setUserName] = useState(window.sessionStorage.getItem('bookingUser'))
  const { decodedToken, isExpired } = useJwt(userName);
  console.log(decodedToken);

  useEffect(() => {
    setUserName(window.sessionStorage.getItem('bookingUser'))
  }, [])
  
  const getInitials = () => {
    // let initials = ''
    // const array = userName.split(' ')
    // array.forEach(element => {
    //   initials += element.charAt(0)
    // });
    // return initials
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.initials}>{decodedToken?.name?.charAt(0).toUpperCase() + decodedToken?.lastName?.charAt(0).toUpperCase()}</div>
      <p>Hola, {decodedToken?.name + " " + decodedToken?.lastName}</p>
      <img onClick={logout} src={close} className={styles.icon} alt="Icono de cierre"/>
    </div>
  );
}