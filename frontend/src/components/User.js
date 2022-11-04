import styles from '../styles/user.module.css'

export const User = ({user, logout}) => {
  const { name, initials } = user;
  return (
    <div className={styles.userContainer}>
      <div className={styles.initials}>{initials}</div>
      <p>Hola, {name}</p>
      <div onClick={logout}>X</div>
    </div>
  );
}