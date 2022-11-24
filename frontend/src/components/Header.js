import styles from '../styles/header.module.css';
import { useContext } from 'react'
import { RightNav, Hamburguer, User } from './index';
import { logoLarge, logoSmall } from '../assets/index'
import { GlobalContext } from '../GlobalContext';
import { Link } from 'react-router-dom'


export const Header = () => {
  const {isMobile,logged} = useContext(GlobalContext)
  const [isLogged, setIsLogged] = logged

  const handleLogout = () => {
    sessionStorage.removeItem('bookingUser')
    setIsLogged(false)
  }

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={isMobile ? logoSmall : logoLarge}
            alt="Logo digital booking"
          />
        </Link>
      </div>
      {isLogged ? (
        <User
          logout={handleLogout}
        />
      ) :( isMobile ? (
        <Hamburguer />
      ) : (
        <RightNav />
      ))}
    </div>
  );
};
