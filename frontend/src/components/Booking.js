import styles from "../styles/booking.module.css"
import { Politics, ProductHeader } from "./index"
import Calendar from "react-calendar";


export const Booking = () => {

    const renderPersonalData = () => {
        return (
          <div className={styles.personalDataContainer}>
            <h2 className={styles.subtitle}>Completá tus datos</h2>
            <div className={styles.row}>
              <div className={styles.personalDataColumn}>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresá tu nombre"
                  autoComplete="name"
                  required={true}
                ></input>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@ejemplo.com"
                  autoComplete="email"
                  required={true}
                ></input>
              </div>
              <div className={styles.personalDataColumn}>
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Ingresá tu apellido"
                  autoComplete="family-name"
                  required={true}
                ></input>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Seleccioná tu ciudad"
                  autoComplete="home city"
                  required={true}
                ></input>
              </div>
            </div>
          </div>
        );
    }

    const renderBookingDetail = () => {
        return (
          <div className={styles.bookingDetailContainer}>
          <h2>
            Detalle de la reserva
          </h2>
          <p>imagen</p>
          <div>
          <p>{"hotel".toUpperCase()}</p>
          <h3>Hotel Maravilla</h3>
          </div>
        </div>
        )
    }

    const renderBookingDate = () => {
        return (
          <div className={styles.bookingDateContainer}>
            <h2 className={styles.subtitle}>Seleccioná tu fecha de reserva</h2>
            <Calendar showDoubleView={true}/>
          </div>
        );
    }

    const renderArrival = () => {
        return (
            <div>
                Arrival
            </div>
        )
    }

    return (
      <p className={styles.container}>
        <ProductHeader categoryId={"1"} name={"Nombre del hotel"} />
        <div className={styles.section}>
          <div className={styles.column}>
            {renderPersonalData()}
            {renderBookingDate()}
          </div>
          {renderBookingDetail()}
        </div>

        {renderArrival()}
        <Politics />
      </p>
    );
}