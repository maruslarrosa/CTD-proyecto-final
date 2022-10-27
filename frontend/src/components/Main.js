import styles from '../styles/main.module.css'
import { CategoryContainer } from './CategoryContainer'
import { SearchBlock } from './SearchBlock'

export const Main = () => {

    return (
        <div className={styles.container}>
            <SearchBlock/>
            <CategoryContainer/>
        </div>
    )
}