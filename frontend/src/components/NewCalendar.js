import styles from '../styles/searchBlock.module.css'
import { useEffect, useState } from "react"
import Calendar from "react-calendar";
import { point } from '../assets'
import { Button } from './index';
import "react-calendar/dist/Calendar.css"


export const NewCalendar = () => {
    // Location related
    const [listVisibility, setListVisibility] = useState(false)
    const [selectedLocation , setSelectedLocation] = useState("")
    
    const handleLocationList = (newLocation) => {
        setSelectedLocation(newLocation)
        setListVisibility(!listVisibility)
    }

    // Calendar related
    const [date, setDate] = useState();
    const [inputRange, setInputRange] = useState("Seleccioná tus fechas");
    const [calendarVisibility, setCalendarVisibility] = useState(false);

    useEffect(() => {
        if(!!date) {
          const initDate = date[0].toLocaleDateString();
          const endDate = date[1].toLocaleDateString();
          setInputRange(`${initDate} - ${endDate}`)
        }
        setCalendarVisibility(false)
    }, [date])

    return (
      <div className={styles.generalSearchContainer}>
        <h2 className={styles.title}>
          Busca ofertas en hoteles, casas y mucho más
        </h2>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <div>
              <div
                className={styles.searchInput}
                onClick={() => setListVisibility(true)}
              >
                <img src={point} alt="Icono de ubicación" s />
                <p>
                  {!!selectedLocation
                    ? selectedLocation.provincia + " , " + selectedLocation.pais
                    : "¿A dónde vamos?"}
                </p>
              </div>

              {listVisibility ? (
                <div className={styles.searchDropdown}>
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={styles.dropDown}
                      onClick={() => handleLocationList(location)}
                    >
                      <img src={point} alt="Icono de ubicación" s />
                      <div className={styles.location}>
                        <p>{location.provincia}</p>
                        <p>{location.pais}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.searchInputContainer}>
            <input
              className={styles.searchInput}
              value={inputRange}
              onFocus={() => setCalendarVisibility(true)}
              onChange={() => {}}
            />
            {calendarVisibility ? (
              <Calendar
                value={date}
                onChange={setDate}
                selectRange="true"
                isOpen={calendarVisibility}
                minDate={new Date()}
                className={styles.customCalendar}
              />
            ) : null}
          </div>
          <Button text={"Buscar"} color={"secondary"} />
        </div>
      </div>
    );
}

const locations = [
    { id: 1, provincia: "Buenos Aires", pais: "Argentina" },
    { id: 2, provincia: "Ciudad Autónoma de Buenos Aires", pais: "Argentina" },
    { id: 3, provincia: "Catamarca", pais: "Argentina" },
    { id: 4, provincia: "Chaco", pais: "Argentina" },
    { id: 5, provincia: "Chubut", pais: "Argentina" },
    { id: 6, provincia: "Córdoba", pais: "Argentina" },
    { id: 7, provincia: "Corrientes", pais: "Argentina" },
    { id: 8, provincia: "Entre Ríos", pais: "Argentina" },
    { id: 9, provincia: "Formosa", pais: "Argentina" },
    { id: 10, provincia: "Jujuy", pais: "Argentina" },
    { id: 11, provincia: "La Pampa", pais: "Argentina" },
    { id: 12, provincia: "La Rioja", pais: "Argentina" },
    { id: 13, provincia: "Mendoza", pais: "Argentina" },
    { id: 14, provincia: "Misiones", pais: "Argentina" },
    { id: 15, provincia: "Neuquén", pais: "Argentina" },
    { id: 16, provincia: "Río Negro", pais: "Argentina" },
    { id: 17, provincia: "San Juan", pais: "Argentina" },
    { id: 18, provincia: "San Luis", pais: "Argentina" },
    { id: 19, provincia: "Santa Cruz", pais: "Argentina" },
    { id: 20, provincia: "Santiago del Estero", pais: "Argentina" },
    { id: 21, provincia: "Tierra del Fuego", pais: "Argentina" },
    { id: 22, provincia: "Tucumán", pais: "Argentina" }
  ]
  