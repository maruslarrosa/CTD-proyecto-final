import styles from '../styles/product.module.css'
import {
  Booking,
  Characteristics,
  LargeGallery,
  Map,
  Politics,
  ProductDescription,
  ProductHeader,
  ProductSubHeader,
} from "./index";
import { kitchen, car, air, wifi, tv, pet, pool } from '../assets';
import { useEffect } from 'react';

export const Product = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // fetch product

    return (
      <div className={styles.container}>
        <ProductHeader categoryId={product.category.id} name={product.name}/>
        <ProductSubHeader productId={product.id} cityId={product.city.id} />
        <LargeGallery images={product.images}/>
        <ProductDescription description={product.description} />
        <Characteristics characteristics={product.characteristics} />
        <Map />
        <Politics />
        <Booking />
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
            url: pool
        },
        {
            id: 2,
            name: "Cocina",
            url: kitchen
        },
        {
            id: 3,
            name: "Aire acondicionado",
            url: air
        },
        {
            id: 4,
            name: "Estacionamiento",
            url: car
        },
        {
            id: 5,
            name: "Televisor",
            url: tv
        },
        {
            id: 6,
            name: "Apto mascotas",
            url: pet
        },
        {
            id: 7,
            name: "Wifi",
            url: wifi
        }
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
            url: "https://i0.wp.com/files.tripstodiscover.com/files/2017/10/Blue-Mountain-Bed-and-Breakfast.jpeg"
        },
        {
            id: 2,
            name: "Foto 2",
            url: "https://cf.bstatic.com/images/hotel/840x460/329/329322699.jpg"
        },
        {
            id: 3,
            name: "Foto 3",
            url: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        },
        {
            id: 4,
            name: "Foto 4",
            url: "https://i0.wp.com/files.tripstodiscover.com/files/2017/10/Blue-Mountain-Bed-and-Breakfast.jpeg"
        },
        {
            id: 5,
            name: "Foto 5",
            url: "https://cf.bstatic.com/images/hotel/840x460/329/329322699.jpg"
        },
        {
            id: 6,
            name: "Foto 06",
            url: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        }
    ]
}