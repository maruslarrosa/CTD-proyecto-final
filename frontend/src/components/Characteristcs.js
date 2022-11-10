import styles from "../styles/product.module.css"

export const Characteristics = ({characteristics}) => {

    const renderCharacteristicsItems = () => {
        const list =  characteristics.map((item) => {
            return (
                <div className={styles.characteristicsColumn}>
                <img className={styles.characteristcsIcon} src={item.url} />
                <p>{item.name}</p>
              </div>
            )

          })
        return list
    }
    
    return (
      <div className={styles.characteristicsContainer}>
        <h2 className={styles.productSubtitle}>¿Qué ofrece este lugar?</h2>
        <hr />
        <div className={styles.characteristcsGrid}>
          {renderCharacteristicsItems()}
        </div>
      </div>
    );
}