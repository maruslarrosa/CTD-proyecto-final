import styles from '../styles/largeGallery.module.css'

export const LargeGallery = ({images}) => {
    let smallGrid = ()=>{
      let array = []
      for(let i = 1; i<5; i++) {
        array.push(<img className={styles.smallImg} key={images[i].id} src={images[i].url} alt={images[i].name} />)
      }
      return array;
    }

    return (
      <div className={styles.imgContainer}>
        <div className={styles.imgColumn}>
          <img
            className={styles.largeImg}
            src={images[0].url}
            alt={images[0].name}
          />
        </div>
        <div className={styles.imgColumn}>
          <div className={styles.imgGrid}>{
            smallGrid()
          }</div>
        </div>
        <button className={styles.seeMore}>Ver más</button>
      </div>
    );
}