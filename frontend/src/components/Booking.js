import styles from "../styles/booking.module.css";
import { Calification, Button, Politics, ProductHeader } from "./index";
import Calendar from "react-calendar";
import { point } from "../assets/index.js";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from '../services';
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

export const Booking = () => {
  const { isMobile } = useContext(GlobalContext)
  const { data } = useParams();
  const navigate = useNavigate()
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(
    window.sessionStorage.getItem("bookingUser")
  );
  const names = userName.split(" ");

  useEffect(() => {
    setUserName(window.sessionStorage.getItem("bookingUser"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
    getProductById(data).then(response => {
        setproduct(response)
        setLoading(false)
    })
}, [data])

  const handleButtonClick = () => {
    navigate('/success')
  };

  const renderPersonalData = () => {
    return (
      <>
        {loading ? (
          <p>cargando</p>
        ) : (
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
                  value={names[0]}
                  disabled
                ></input>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ejemplo@ejemplo.com"
                  autoComplete="email"
                  disabled
                  value="email@example.com"
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
                  value={names[1]}
                  disabled
                ></input>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Seleccioná tu ciudad"
                  autoComplete="home city"
                  value={product.city_id.name}
                  disabled
                ></input>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderBookingDetail = () => {
    return (
      <div className={styles.bookingDetailContainer}>
        <h2>Detalle de la reserva</h2>
        <img src={product.images[0].url} alt="Imagen de Hotel" />
        <hr></hr>
        <div className={styles.hotelInfoContainer}>
          <div className={styles.hotelName}>
            <p>{product.category_id.name.toUpperCase()}</p>
            <h3>Hotel Maravilla</h3>
          </div>
          <div className={styles.bookingLocation}>
            <img className={styles.icon} src={point} alt="Icono de ubicación" />
            <p>{product.city_id.name}</p>
          </div>
          <Calification
            calification={{ stars: 4, description: "Muy bueno", rating: 8 }}
          />
        </div>
        <hr></hr>
        <h3>
          Check-in: <span>14pm</span>
        </h3>
        <hr></hr>
        <h3>
          Check-out: <span>11am</span>
        </h3>
        <hr></hr>
        <div className={styles.button}>
          <Button
            text={"Confirmar reserva"}
            label={"Confirmar la reserva"}
            color={"secondary"}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    );
  };

  const renderBookingDate = () => {
    return (
      <div className={styles.bookingDateContainer}>
        <h2 className={styles.subtitle}>Seleccioná tu fecha de reserva</h2>
        <Calendar showDoubleView={!isMobile} />
      </div>
    );
  };

  const renderArrival = () => {
    return (
      <div className={styles.arrivalContainer}>
        <h2>Tu horario de llegada</h2>
        <p>
          Tu habitación va a estar lista para el check-in entre las 10:00 AM y
          las 11:00 AM
        </p>
        <label htmlFor="hours">Indicá tu horario estimado de llegada</label>
        <select className={styles.arrivalSelector} name="hours" id="hours">
          <option value="10">10:00 AM</option>
          <option value="11">11:00 AM</option>
          <option value="12">12:00 PM</option>
          <option value="13">13:00 PM</option>
          <option value="14">14:00 PM</option>
          <option value="15">15:00 PM</option>
          <option value="16">16:00 PM</option>
          <option value="17">17:00 PM</option>
        </select>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <ProductHeader
            categoryId={product.category_id.id}
            name={product.name}
          />{" "}
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
        </>
      )}
    </div>
  );
};
