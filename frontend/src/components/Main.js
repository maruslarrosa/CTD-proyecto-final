import styles from '../styles/main.module.css'
import { ProductList } from './index'

export const Main = () => {
    return (
        <div className={styles.container}>
            <ProductList />
        </div>
    )
}