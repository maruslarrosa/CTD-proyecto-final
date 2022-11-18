import styles from "../styles/booking.module.css"
import { Politics, ProductHeader } from "./index"


export const Booking = () => {

    const renderPersonalData = () => {
        return (
            <div>
                Personal Data
            </div>
        )
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