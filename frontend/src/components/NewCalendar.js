import styles from '../styles/searchBlock.module.css'
import { useEffect, useState } from "react"
import Calendar from "react-calendar";
import { point } from '../assets'
import { Button } from './index';
import "react-calendar/dist/Calendar.css"
import { getCities } from '../services';


export const NewCalendar = ({ handleSearchClick }) => {
    // Location related
    const [cities, setCities] = useState([])
    const [listVisibility, setListVisibility] = useState(false)
    const [selectedLocation , setSelectedLocation] = useState("")

    useEffect(()=>{
      getCities().then((response) => {
        setCities(response)
      })
    }, [])
    
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

    const handleButtonClick = () => {
      handleSearchClick(selectedLocation.id)
    }

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
                <img className={styles.icon} src={point} alt="Icono de ubicación" s />
                <p>
                  {!!selectedLocation ? selectedLocation.name : "¿A dónde vamos?"}
                </p>
              </div>

              {listVisibility ? (
                <div className={styles.searchDropdown}>
                  {cities.map((city) => (
                    <div
                      key={city.id}
                      className={styles.dropDown}
                      onClick={() => handleLocationList(city)}
                    >
                      <img className={styles.icon} src={point} alt="Icono de ubicación" s />
                      <div className={styles.location}>
                        <p>{city.name}</p>
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
          <Button handleButtonClick={handleButtonClick} text={"Buscar"} color={"secondary"} />
        </div>
      </div>
    );
}