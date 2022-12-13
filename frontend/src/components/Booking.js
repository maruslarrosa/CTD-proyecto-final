import styles from "../styles/booking.module.css";
import { Calification, Button, Politics, ProductHeader } from "./index";
import Calendar from "react-calendar";
import { point } from "../assets/index.js";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { isWithinInterval } from "date-fns";

export const Booking = () => {
  const { isMobile } = useContext(GlobalContext);
  const { data } = useParams();
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(
    window.sessionStorage.getItem("bookingUser")
  );
  const names = userName.split(" ");
  const [checkin, setCheckin] = useState("");
  const [date, setDate] = useState();
  const [inputRange, setInputRange] = useState("Seleccioná tus fechas");

  useEffect(() => {
    setUserName(window.sessionStorage.getItem("bookingUser"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductById(data).then((response) => {
      setproduct(response);
      setLoading(false);
    });
  }, [data]);

  useEffect(() => {
    if (!!date) {
      const initDate = date[0].toLocaleDateString();
      const endDate = date[1].toLocaleDateString();
      setInputRange(`${initDate} - ${endDate}`);
    }
  }, [date]);
  const handleButtonClick = () => {
    navigate("/success");
  };

  const renderPersonalData = () => {
    return (
      <>
        {loading ? (
          <p>cargando</p>
        ) : (
          <div className={styles.personalDataContainer}>
            <h2 className={styles.subtitle}>Verificá tus datos</h2>
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
        <div className={styles.checkIn}>
          <h4>
            Check-in: <span>{checkin || "seleccioná un horario"}</span>
          </h4>
          <h4>
            Check-out: <span>11:00 AM</span>
          </h4>
        </div>
        <h4>{inputRange}</h4>

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

  const renderBookingDate = () => {
    return (
      <div className={styles.bookingDateContainer}>
        <h2 className={styles.subtitle}>Seleccioná tu fecha de reserva</h2>
        <Calendar
          showDoubleView={!isMobile}
          tileDisabled={tileDisabled}
          onChange={setDate}
          selectRange={true}
          minDate={new Date()}
        />
      </div>
    );
  };

  const handleSelectChange = (e) => {
    setCheckin(e.target.value);
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
        <select
          className={styles.arrivalSelector}
          name="hours"
          id="checkin"
          onChange={handleSelectChange}
        >
          <option value="12:00 PM">12:00 PM</option>
          <option value="13:00 PM">13:00 PM</option>
          <option value="14:00 PM">14:00 PM</option>
          <option value="15:00 PM">15:00 PM</option>
          <option value="16:00 PM">16:00 PM</option>
          <option value="17:00 PM">17:00 PM</option>
          <option value="18:00 PM">17:00 PM</option>
          <option value="19:00 PM">17:00 PM</option>
          <option value="20:00 PM">17:00 PM</option>
          <option value="21:00 PM">17:00 PM</option>
          <option value="22:00 PM">17:00 PM</option>
          <option value="23:00 PM">17:00 PM</option>
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
          />
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
