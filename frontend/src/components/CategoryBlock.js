import styles from '../styles/categoryBlock.module.css'

export const CategoryBlock = ({ category, handleCategoryClick }) => {
  return (
    <div className={styles.cardContainer} onClick={()=>handleCategoryClick(category.id)}>
      <img src={category.url} alt={category.name} />
      <div>
        <h2>{category.title}</h2>
        <p>{category.name}</p>
      </div>
    </div>
  )
}
