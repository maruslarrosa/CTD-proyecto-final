import React from 'react'
import styles from '../styles/categoryBlock.module.css'
import { CategoryBlock } from './index'

export const CategoryContainer = () => {
    const categories = [
        {
            "id": 4,
            "title": "Bed and breakfast",
            "description": "Mejores habitaciones para pasar la noche",
            "amount": 8364,
            "url": "https://i0.wp.com/files.tripstodiscover.com/files/2017/10/Blue-Mountain-Bed-and-Breakfast.jpeg"
        },
        {
            "id": 3,
            "title": "Departamentos",
            "description": "Departamentos de alta calidad ",
            "amount": 1273,
            "url": "https://cf.bstatic.com/images/hotel/840x460/329/329322699.jpg"
        },
        {
            "id": 2,
            "title": "Hoteles",
            "description": "Hoteles de lujo frente al mar",
            "amount": 1489,
            "url": "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        },
        {
            "id": 1,
            "title": "Hostel",
            "description": "Hostel, habitaciones compartidas",
            "amount": 2970,
            "url": "https://media.cntraveler.com/photos/53e2f3f0dddaa35c30f6668f/master/pass/home-lisbon-portugal.jpg"
        }
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.categoryContainerTitle}>Buscar por tipo de alojamiento</h2>

            <div className={styles.categoryCardContainer}>
                {categories.map(category => <CategoryBlock key={category.id} category={category} />)}
            </div>
        </div>
    )
}
