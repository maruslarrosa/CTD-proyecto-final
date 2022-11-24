import styles from '../styles/product.module.css'
import {
  Availability,
  Characteristics,
  LargeGallery,
  Map,
  Politics,
  ProductDescription,
  ProductHeader,
  ProductSubHeader,
} from "./index";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services';
import { useState } from 'react';

export const Product = () => {
    const {data} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        getProductById(data).then(response => {
            setProduct(response)
            setLoading(false)
        })
    }, [data])



    return (
      <>
        {loading ? (
          <p>Cargando</p>
        ) : (
          <div className={styles.container}>
            <ProductHeader
              categoryId={product.category_id.id}
              name={product.name}
            />
            <ProductSubHeader productId={product.id} city={product.city_id} />
            <LargeGallery images={product.images} />
            <ProductDescription description={product.description} />
            <Characteristics characteristics={product.characteristicsInProducts_id} />
            <Map />
            <Politics />
            <Availability product={product}/>
          </div>
        )}
      </>
    );
}