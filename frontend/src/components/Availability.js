import styles from '../styles/availability.module.css'
import Calendar from "react-calendar";
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext'
import { useContext } from 'react';

export const Availability = () => {
  const {logged, fromBooking, isMobile} = useContext(GlobalContext)
  const [isLogged] = logged
  const [,setIsFromBooking] = fromBooking
  const navigate = useNavigate()
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowResizing() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResizing);
    return () => {
      window.removeEventListener("resize", handleWindowResizing);
    };
  }, []);

  const handleButtonClick = () => {
    if(isLogged) {
      navigate('booking')
    } else {
      setIsFromBooking(true)
      navigate('/login')
    }
  };

  return (
      <div className={styles.availabilityContainer}>
        <div className={styles.leftContainer}>
          <h2 className={styles.title}>Fechas disponibles</h2>
          <Calendar showDoubleView={!isMobile} />
        </div>
        <div className={styles.startavailability}>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
          <Button
            text="Iniciar reserva"
            label="Iniciar reserva"
            color="secondary"
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
  );
}