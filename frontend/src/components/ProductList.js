import styles from '../styles/productList.module.css'
import { CategoryContainer, NewCalendar, ProductCard } from './index'
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory, getProductsByCity } from '../services';

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
        })
    }, [])

    const handleCategoryClick = (id) => {
        getProductsByCategory(id).then((response) => setProducts(response))
    }

    const handleSearchClick = (id) => {
        getProductsByCity(id).then((response) => setProducts(response))
    }

    return (
      <>
        <NewCalendar handleSearchClick={handleSearchClick} />
        <CategoryContainer handleCategoryClick={handleCategoryClick} />
        <h1 className={styles.title}>Recomendaciones</h1>
        <div className={styles.productListContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </>
    );
}