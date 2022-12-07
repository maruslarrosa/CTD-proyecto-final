import styles from '../styles/searchBlock.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import Calendar from "react-calendar";
import { point } from '../assets'
import { Button } from './index';
import '../styles/Calendar.css'
import { getCities } from '../services';
import { GlobalContext } from '../GlobalContext';


export const NewCalendar = ({ handleSearchClick }) => {
    const { isMobile, isTablet } = useContext(GlobalContext)
    // Location related
    const [cities, setCities] = useState([])
    const [listVisibility, setListVisibility] = useState(false)
    const [selectedLocation , setSelectedLocation] = useState("")
    const locationRef = useRef()

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
    const calendarRef = useRef()

    useEffect(() => {
        if(!!date) {
          const initDate = date[0].toLocaleDateString();
          const endDate = date[1].toLocaleDateString();
          setInputRange(`${initDate} - ${endDate}`)
        }
        setCalendarVisibility(false)
    }, [date])

    useEffect(() => {
      function handleClickOutside(event) {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
          setCalendarVisibility(false)
        } else if (locationRef.current && !locationRef.current.contains(event.target)) {
          setListVisibility(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [calendarRef, locationRef]);

    // Common
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
                <div className={styles.searchDropdown} ref={locationRef}>
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
                selectRange={true}
                isOpen={calendarVisibility}
                minDate={new Date()}
                className={styles.customCalendar}
                showDoubleView={!isMobile && !isTablet}
                closeCalendar={false}
                inputRef={calendarRef}
              />
            ) : null}
          </div>
          <Button handleButtonClick={handleButtonClick} text={"Buscar"} color={"secondary"} />
        </div>
      </div>
    );
}