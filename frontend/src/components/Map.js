import { mapDesktop, mapPhone, mapTablet} from '../assets'
import { useState, useEffect } from 'react';
import styles from '../styles/map.module.css'

export const Map = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowResizing() {
        setWidth(window.innerWidth);
      }
    
      useEffect(() => {
        window.addEventListener("resize", handleWindowResizing);
        return () => {
          window.removeEventListener("resize", handleWindowResizing);
        };
      },[]);

    const isMobile = width <= 500;
    const isTablet = 500 < width < 820

    const renderMap = () => {
        if(isMobile) {
            return <img src={mapPhone} />
        } else if(isTablet) {
            return <img src={mapTablet} />
        }else {
            return <img className={styles.map} src={mapDesktop} />
        }
    }
    return (
        <div>
            {renderMap()}
        </div>
    );
}