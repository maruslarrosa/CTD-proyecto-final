import styles from "../styles/product.module.css"

export const Characteristics = () => {
    return (
      <div className={styles.characteristicsContainer}>
        <h2 className={styles.productSubtitle}>¿Qué ofrece este lugar?</h2>
        <div className={styles.characteristcsGrid}>
            <div className={styles.characteristicsColumn}>
                <p>item1</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item2</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item3</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item4</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item5</p>
            </div>
            {/* <div className={styles.characteristicsColumn}>
                <p>item1</p>
                <p>item2</p>
                <p>item3</p>
                <p>item4</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item1</p>
                <p>item2</p>
                <p>item3</p>
                <p>item4</p>
            </div>
            <div className={styles.characteristicsColumn}>
                <p>item1</p>
                <p>item2</p>
                <p>item3</p>
                <p>item4</p>
            </div> */}
        </div>
      </div>
    );
}