import styles from '../styles/main.module.css'
import { NewCalendar, ProductList } from './index'

export const Main = () => {
    return (
        <div className={styles.container}>
            <NewCalendar />
            <ProductList />
        </div>
    )
}