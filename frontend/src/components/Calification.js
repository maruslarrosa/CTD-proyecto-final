import { useEffect } from 'react';
import styles from '../styles/calification.module.css'

export const Calification = ({calification}) => {
    const {stars, description, rating} = calification

    return (
      <div className={styles.calificationContainer}>
        <div className={styles.leftContainer}>
          <p>{description}</p>
          <div className={styles.stars}>
            <p
              className={
                stars > 0 ? styles.selectedStar : styles.unselectedStar
              }
            >
              ★
            </p>
            <p
              className={
                stars > 1 ? styles.selectedStar : styles.unselectedStar
              }
            >
              ★
            </p>
            <p
              className={
                stars > 2 ? styles.selectedStar : styles.unselectedStar
              }
            >
              ★
            </p>
            <p
              className={
                stars > 3 ? styles.selectedStar : styles.unselectedStar
              }
            >
              ★
            </p>
            <p
              className={
                stars > 4 ? styles.selectedStar : styles.unselectedStar
              }
            >
              ★
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
              {rating}
        </div>
      </div>
    );
}   