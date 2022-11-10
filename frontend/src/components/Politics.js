import styles from '../styles/product.module.css'

export const Politics = () => {
    return (
      <div className={styles.politicsContainer}>
        <h2 className={styles.productSubtitle}>Politics</h2>
        <hr />
        <div className={styles.politicsGrid}>
            <div className={styles.politicsColumn}>
                <h4>Normas de la casa</h4>
                <p className={styles.politicsItem}>Check-out</p>
                <p className={styles.politicsItem}>No se permiten fiestas</p>
                <p className={styles.politicsItem}>No fumar</p>
            </div>
            <div className={styles.politicsColumn}>
                <h4>Salud y seguridad</h4>
                <p className={styles.politicsItem}>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
            </div>
            <div className={styles.politicsColumn}>
                <h4>Política de cancelación</h4>
                <p className={styles.politicsItem}>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</p>
            </div>
        </div>
      </div>
    );
}