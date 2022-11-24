import styles from '../styles/availability.module.css'
import Calendar from "react-calendar";
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
export const Availability = ({ product }) => {
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

  const doubleCalendar = width >= 820;

  const handleButtonClick = () => {
    navigate('booking')
  };

  return (
    <div className={styles.availabilityContainer}>
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>Fechas disponibles</h2>
        <Calendar showDoubleView={doubleCalendar} />
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