import styles from '../styles/product.module.css'
import { point } from '../assets'
import { Calification } from './Calification'

export const ProductSubHeader = ({productId, city}) => {

    return (
      <div className={styles.subHeaderContainer}>
        <div className={styles.locationContainer}>
          <img
            className={styles.smallIcon}
            src={point}
            alt="Icono de ubicación"
          />
          <p>{city.name}</p>
        </div>
        <Calification
          key={productId}
          calification={{ stars: 2, description: "Bueno", rating: 5 }}
        />
      </div>
    );
}
