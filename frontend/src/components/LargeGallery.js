import styles from '../styles/largeGallery.module.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useState } from 'react';

export const LargeGallery = ({images}) => {
  const [openCarousel, setOpenCarousel] = useState(false)
    let smallGrid = ()=>{
      let array = []
      for(let i = 1; i<5; i++) {
        array.push(<img className={styles.smallImg} key={images[i].id} src={images[i].url} alt={images[i].name} />)
      }
      return array;
    }


    return (
      <div>
        {openCarousel || (window.innerWidth < 820) ? (
          <div className={styles.owlContainer}>
            <button
              onClick={() => setOpenCarousel(false)}
              className={styles.closeCarousel}
            >
              Cerrar
            </button>
            <div className="container-fluid">
              <OwlCarousel
                items={1}
                className="owl-theme owl-height"
                loop
                nav
                margin={8}
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
              >
                <div key={images[0].id}>
                  <img className={styles.carouselImg} src={images[0].url} />
                </div>
                <div key={images[1].id}>
                  <img className={styles.carouselImg} src={images[1].url} />
                </div>
                <div key={images[2].id}>
                  <img className={styles.carouselImg} src={images[2].url} />
                </div>
                <div key={images[3].id}>
                  <img className={styles.carouselImg} src={images[3].url} />
                </div>
                <div key={images[4].id}>
                  <img className={styles.carouselImg} src={images[4].url} />
                </div>
              </OwlCarousel>
            </div>
          </div>
        ) : (
          <div className={styles.imgContainer}>
            <div className={styles.imgColumn}>
              <img
                className={styles.largeImg}
                src={images[0].url}
                alt={images[0].name}
              />
            </div>
            <div className={styles.imgColumn}>
              <div className={styles.imgGrid}>{smallGrid()}</div>
            </div>
            <button
              onClick={() => setOpenCarousel(true)}
              className={styles.seeMore}
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    );
}