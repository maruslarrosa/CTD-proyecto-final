import styles from '../styles/menu.module.css'
import { Button } from './Button'

export const Menu = () => {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.menuHeader}>
            <Button
            text={"cerrar"}
            label={"Cerrar y volver a la pantalla principal"}
            color={"primary"}
            />
            <div className={styles.menuTitle}>Menu</div>
        </div>
      </div>
    );
}

