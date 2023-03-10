import { useEffect, useState } from 'react';
import styles from '../styles/product.module.css'
import { chevronLeft } from '../assets';
import { Link } from 'react-router-dom';

const categories = {
    1: "Hoteles",
    2: "Departamentos",
    3: "Bed and beakfast",
    4: "Hostel"
}

export const ProductHeader = ({categoryId, name}) => {
    const [category, setCategory] = useState('')

    useEffect(() => {
      // fetch a API
        setCategory(categories[categoryId])
    }, [category])

    return (
      <div className={styles.headerContainer}>
        <div className={styles.name}>
          <h5>{category.toLocaleUpperCase()}</h5>
          <h2>{name}</h2>
        </div>
        <Link to="/">
          <img
            className={styles.goBack}
            src={chevronLeft}
            alt="Volver al listado de productos"
          />
        </Link>
      </div>
    );
}