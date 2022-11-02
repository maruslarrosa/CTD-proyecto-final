import styles from '../styles/categoryBlock.module.css'

export const CategoryBlock = ({ category }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={category.url} alt={category.title} />
      <div>
        <h2>{category.title}</h2>
        <p>{category.amount} {category.title}</p>
      </div>
    </div>
  )
}
