import styles from '../styles/productCard.module.css'

export const ProductCard = ({product}) => {
    return (
      <div className={styles.cardContainer}>
        <img src={product.crimg} className={styles.img} />
        <div className={styles.productDetail}>
          <p>{product.category.toUpperCase()}</p>
          <h3>{product.title}</h3>
        </div>
      </div>
    );
}