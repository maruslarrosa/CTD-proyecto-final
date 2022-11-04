import styles from '../styles/main.module.css'
import { CategoryContainer, NewCalendar, ProductList } from './index'

export const Main = () => {
    return (
        <div className={styles.container}>
            <NewCalendar />
            <CategoryContainer/>
            <ProductList />
        </div>
    )
}