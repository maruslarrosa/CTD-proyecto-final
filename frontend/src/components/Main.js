import styles from '../styles/main.module.css'
import { CategoryContainer, SearchBlock } from './index'
export const Main = () => {

    return (
        <div className={styles.container}>
            <SearchBlock/>
            <CategoryContainer/>
        </div>
    )
}