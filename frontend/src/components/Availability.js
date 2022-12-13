import styles from "../styles/availability.module.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import {isWithinInterval} from "date-fns"

export const Availability = () => {
  const { logged, fromBooking, isMobile } = useContext(GlobalContext);
  const [isLogged] = logged;
  const [, setIsFromBooking] = fromBooking;
  const navigate = useNavigate();


  const handleButtonClick = () => {
    if (isLogged) {
      navigate("booking");
    } else {
      setIsFromBooking(true);
      navigate("/login");
    }
  };

  const d1 = new Date(2022, 12, 7);
  const d2 = new Date(2022, 12, 9);
  const d3 = new Date(2022, 12, 19);
  const d4 = new Date(2022, 12, 25);

  const disabledRanges = [
    [d1, d2],
    [d3, d4],
  ];

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }

  function isWithinRanges(date, ranges) {
    return ranges.some((range) => isWithinRange(date, range));
  }

  function tileDisabled({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is within any of the ranges
      return isWithinRanges(date, disabledRanges);
    }
  }

  const today = new Date()


  return (
    <div className={styles.availabilityContainer}>
      <div className={styles.leftContainer}>
        <h2 className={styles.title}>Fechas disponibles</h2>
        <Calendar
          showDoubleView={!isMobile}
          tileDisabled={tileDisabled}
          value={today}
          minDate={today}
          />
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
};
