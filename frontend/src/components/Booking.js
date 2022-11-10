import styles from '../styles/booking.module.css'
import Calendar from "react-calendar";

export const Booking = () => {
    return (
      <div className={styles.bookingContainer}>
        <h2 className={styles.title}>Fechas disponibles</h2>
        <Calendar />
      </div>
    );
}