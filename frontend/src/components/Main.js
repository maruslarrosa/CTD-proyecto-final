import styles from '../styles/main.module.css'
import { SearchBlock } from './SearchBlock'

export const Main = () => {

    return (
        <div className={styles.container}>
            <SearchBlock/>
            <p>Main</p>
        </div>
    )
}