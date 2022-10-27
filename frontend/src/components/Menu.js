import styles from '../styles/menu.module.css'
import { Button } from './Button'
import { Link } from 'react-router-dom';

export const Menu = ({close}) => {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
          <Button
          onClick={close}
            text={"cerrar"}
            label={"Cerrar y volver a la pantalla principal"}
            color={"primary"}
          />
          <div className={styles.menuTitle}>Menu</div>
        </div>
        <div className={styles.userButtonContainer}>
          <Link to="/create-account" style={{ textDecoration: "none" }}>
            <Button
              text={"Crear cuenta"}
              label={"Botón para crear cuenta"}
              color={"primary"}
            />
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              text={"Login"}
              label={"Botón para iniciar sesión"}
              color={"primary"}
            />
          </Link>
        </div>
      </div>
    );
}

