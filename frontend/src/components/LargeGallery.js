
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from '../styles/largeGallery.module.css'

export const LargeGallery = ({images}) => {
  const [openCarousel, setOpenCarousel] = useState(false)
    let smallGrid = ()=>{
      let array = []
      for(let i = 1; i<5; i++) {
        array.push(<img className={styles.smallImg} key={images[i].id} src={images[i].url} alt={images[i].name} />)
      }
      return array;
    }

    const createCarouselItemImage = (index, options = {}) => (
      <div key={index} className={styles.sliderItemDiv}>
          <img src={images[index].url} />
          <p className="legend">{images[index].name}</p>
      </div>
  );
  
  const baseChildren = <div className={styles.carouselStyle}>{[...Array(images.length).keys()]
    .map(createCarouselItemImage)}</div>;

    return (
      <div className={styles.sliderContainer}>
        {openCarousel || window.innerWidth < 820 ? (
          <div>
            <button
              onClick={() => setOpenCarousel(false)}
              className={styles.closeCarousel}
            >
              Cerrar
            </button>
            <Carousel className={styles.carouselStyle} autoPlay={true} interval={3000} transitionTime={500}>
              {baseChildren.props.children}
            </Carousel>
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