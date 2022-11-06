import styles from '../styles/productCard.module.css'
import { Calification } from './index';

export const ProductCard = ({product}) => {
    return (
      <div className={styles.cardContainer}>
        <img src={product.crimg} className={styles.img} />
        <div className={styles.productDetail}>
          <div>
            <p>{product.category.toUpperCase()}</p>
            <h3>{product.title}</h3>
          </div>
          <Calification
            key={product.id}
            calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
          />
        </div>
      </div>
    );
}