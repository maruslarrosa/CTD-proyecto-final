import styles from '../styles/user.module.css'
import { close } from '../assets'
import { useEffect, useState } from 'react'

export const User = ({ logout }) => {
  const [userName, setUserName] = useState(window.sessionStorage.getItem('bookingUser'))

  useEffect(() => {
    setUserName(window.sessionStorage.getItem('bookingUser'))
  }, [])
  
  const getInitials = () => {
    let initials = ''
    const array = userName.split(' ')
    array.forEach(element => {
      initials += element.charAt(0)
    });
    return initials
  }

  return (
    <div className={styles.userContainer}>
      <div className={styles.initials}>{getInitials()}</div>
      <p>Hola, {userName}</p>
      <img onClick={logout} src={close} className={styles.icon} alt="Icono de cierre"/>
    </div>
  );
}