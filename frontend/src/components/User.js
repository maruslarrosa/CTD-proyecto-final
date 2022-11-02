import styles from '../styles/user.module.css'
import { GlobalContext } from '../GlobalContext';
import { useContext } from 'react';

export const User = ({user, logout}) => {
    const {name, initials} = user
    return (
        <div className={styles.userContainer}>
            <div className={styles.initials}>{initials}</div>
            <p>Hola, {name}</p>
            <div onClick={logout}>X</div>
        </div>
        
    )
}