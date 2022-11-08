import styles from '../styles/product.module.css'
import { ProductHeader } from './index';

export const Product = () => {

    return (
      <div className={styles.container}>
        <ProductHeader categoryId={product.category.id} name={product.name}/>
      </div>
    );
}


// Backend model
const product = {
    id: 1,
    name: "Hotel Sheraton",
    description: "Conoce el mejor hotel de la ciudad",
    availability: "Disponibilidad",
    policies: "Politicas",
    characteristics: [
        {
            id: 1,
            name: "Pileta",
            url: "icono"
        },
        {
            id: 2,
            name: "Desayuno",
            url: "icono"
        },
        {
            id: 3,
            name: "Aire acondicionado",
            url: "icono"
        },
        {
            id: 4,
            name: "Estacionamiento",
            url: "icono"
        },
    ],
    longitude: "1",
    latitude: "1",
    category: {
        id: 1
    },
    city: {
        id: 1
    },
    images: [
        {
            id: 1,
            name: "Foto 1",
            url: ""
        },
        {
            id: 2,
            name: "Foto 1",
            url: ""
        },
        {
            id: 3,
            name: "Foto 1",
            url: ""
        }
    ]
}
