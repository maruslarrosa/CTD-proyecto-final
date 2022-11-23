import { useEffect, useState } from 'react'
import styles from '../styles/categoryBlock.module.css'
import { CategoryBlock } from './index'
import { getCategories } from '../services'

export const CategoryContainer = ({handleCategoryClick}) => {
    const [categories, setCategories] = useState([])
    useEffect (() => {
        getCategories().then((response) => setCategories(response))
    },[])

    return (
        <div className={styles.container}>
            <h2 className={styles.categoryContainerTitle}>Buscar por tipo de alojamiento</h2>

            <div className={styles.categoryCardContainer}>
                {categories.map(category => <CategoryBlock key={category.id} category={category} handleCategoryClick={handleCategoryClick} />)}
            </div>
        </div>
    )
}
