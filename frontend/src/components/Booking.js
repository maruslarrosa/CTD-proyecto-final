import styles from "../styles/booking.module.css"
import { Calification, Button, Politics, ProductHeader } from "./index"
import Calendar from "react-calendar";
import { point, hotelPNG } from '../assets/index.js'


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
            <h2>Detalle de la reserva</h2>
            <img src={hotelPNG} />
            <hr></hr>
            <div className={styles.hotelInfoContainer}>
              <div className={styles.hotelName}>
                <p>{"hotel".toUpperCase()}</p>
                <h3>Hotel Maravilla</h3>
              </div>
              <div className={styles.bookingLocation}>
                <img
                  className={styles.icon}
                  src={point}
                  alt="Icono de ubicación"
                />
                <p>Mar del plata, Buenos Aires</p>
              </div>
              <Calification
                calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
              />
            </div>
            <hr></hr>
            <h3>Check-in: <span>14pm</span></h3> 
            <hr></hr>
            <h3>Check-out: <span>11am</span></h3>
            <hr></hr>
            <Button text={"Confirmar reserva"} label={"Confirmar la reserva"} color={"secondary"}/>
          </div>
        );
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
            {renderArrival()}
          </div>
          {renderBookingDetail()}
        </div>
        <div className={styles.politicsContainer}>
        <Politics />
        </div>
      </p>
    );
}