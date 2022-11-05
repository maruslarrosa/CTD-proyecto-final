import styles from '../styles/productList.module.css'
import { ProductCard } from './index'

export const ProductList = () => {
    return (
      <>
        <h2>Recomendaciones</h2>
        <div className={styles.productListContainer}>
          {products.map((product) => (
            <div className={styles.product}>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </>
    );
}

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

const products = [
    {
        "id": 1,
        "crimg": "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "category": categories[0].title,
        "title": "Hotel Maravilla",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 2,
        "crimg": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "category": categories[0].title,
        "title": "Hostel Amigos",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 3,
        "crimg": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "category": categories[1].title,
        "title": "Hotel Presidente",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 4,
        "crimg": "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "category": categories[1].title,
        "title": "Hostería Margarita",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 5,
        "crimg": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        "category": categories[2].title,
        "title": "Posada Las Flores",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 6,
        "crimg": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
        "category": categories[2].title,
        title: "Hotel Mar y Estrellas",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 7,
        "crimg": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "category": categories[3].title,
        "title": "Hostel Mundo",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    },
    {
        "id": 8,
        "crimg": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvc3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "category": categories[3].title,
        "title": "Hotel Playa Bonita",
        "location": "Buenos Aires",
        "description": "Velitesse labore, so magni. Eum nesciunt, velit. Minim. Labore lorem for ratione yet eos or dicta quae. Veritatis beatae et. Quae est ullam autem illo yet duis."
    }
]



// https://unsplash.com/es