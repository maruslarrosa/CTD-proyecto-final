import styles from "../styles/booking.module.css"
import { Politics, ProductHeader } from "./index"


export const Booking = () => {

    const renderPersonalData = () => {
        return (
          <div className={styles.personalDataContainer}>
            <h2 className={styles.subtitle}>Completá tus datos</h2>
            <div className={styles.personalDataContainer}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresá tu nombre"
                autoComplete="name"
                required={true}
                className={styles.smallImg}
              ></input>
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Ingresá tu apellido"
                autoComplete="family-name"
                required={true}
                className={styles.smallImg}
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
        );
    }

    const renderProductDetail = () => {
        return (
            <div>Product Detail</div>
        )
    }

    const renderBookingDate = () => {
        return (
            <div>Dates</div>
        )
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
            <ProductHeader categoryId={"1"} name={"Nombre del hotel"}/>
            {renderPersonalData()}
            {renderProductDetail()}
            {renderBookingDate()}
            {renderArrival()}
            <Politics />
        </p>
    )
}