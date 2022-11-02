import styles from '../styles/header.module.css';
import { useContext } from 'react'
import { RightNav, Hamburguer, User } from './index';
import { logoLarge, logoSmall } from '../assets/index'
import { GlobalContext } from '../GlobalContext';
import { Link  } from 'react-router-dom'


export const Header = () => {
  const {isMobile,logged} = useContext(GlobalContext)
  const [isLogged, setIsLogged] = logged


  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img
          src={isMobile ? logoSmall : logoLarge}
          alt="Logo digital booking"
        />
      </div>
      {isLogged ? 
      <User user={{name: 'Maru Larrosa', initials: 'ML'}} logout={() => setIsLogged(false)}/> 
      : isMobile ? <Hamburguer /> : <RightNav />}
    </div>
  );
};
