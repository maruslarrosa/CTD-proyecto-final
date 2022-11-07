import styles from '../styles/productCard.module.css'
import { Button, Calification } from './index';
import { point, pool, wifi } from '../assets'
import {useContext} from 'react'
import { GlobalContext } from '../GlobalContext';

export const ProductCard = ({product}) => {
  const {isMobile} = useContext(GlobalContext)
    return (
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
        <img src={product.crimg} className={styles.img} />
        {
          isMobile ? <Calification
              key={product.id}
              calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
            />
            : null
        }
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.productDetail}>
            <div className={isMobile ? styles.mobileTitle : styles.title}>
              <p>{product.category.toUpperCase()}</p>
              <h3>{product.title}</h3>
            </div>
            {
          !isMobile ? 
          <Calification
              key={product.id}
              calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
            />
            : null
        }
          </div>
          <div className={isMobile ? styles.mobileCardLocation : ''}>
          <div className={styles.location}>
            <img src={point} className={styles.icon} />
            <p>A 940 m del centro</p>
          </div>
          <div className={styles.services}>
            <img src={wifi} className={styles.icon} />
            <img src={pool} className={styles.icon} />
          </div>
          </div>
          
          <div className={styles.descriptionContainer}>
            <p className={styles.shortDescription}>
              Shed everywhere shed everywhere stretching attack your ankles
              chase the red dot, hairball run catnip eat the grass sniff litter
              kitter kitty litty little kitten big roar roar feed me for meow
              meow pee in shoe. Pet me pet me pet me pet me, bite, scratch, why
              are you petting me hide when guests come over walk on keyboard.
              More napping, more napping all the napping is exhausting chase
              little red dot someday it will be mine! or russian blue thug cat
              so run off table persian cat jump eat fish. Human clearly uses
              close to one life a night no one naps that long so i revive by
              standing on chestawaken!. More napping, more napping all the
              napping is exhausting.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              text="Ver más"
              label="Ir a la descripción del producto"
              color="secondary"
              size="large"
            />
          </div>
        </div>
      </div>
    );
}