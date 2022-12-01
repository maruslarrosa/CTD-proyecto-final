import styles from '../styles/searchBlock.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import Calendar from "react-calendar";
import { point } from '../assets'
import { Button } from './index';
import '../styles/Calendar.css'
import { getCities } from '../services';
import { GlobalContext } from '../GlobalContext';
import {isWithinInterval} from "date-fns"


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
        }
        else if (locationRef.current && !locationRef.current.contains(event.target)) {
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

    useEffect(() => {
      function handleClickOutside(event) {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
          setCalendarVisibility(false)
        }
        else if (locationRef.current && !locationRef.current.contains(event.target)) {
          setListVisibility(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [calendarRef, locationRef]);

    const d1 = new Date(2022, 12, 7)
    const d2 = new Date(2022, 12, 9)
    const d3 = new Date(2022, 12, 19)
    const d4 = new Date(2022, 12, 25)

    const disabledRanges = [
      [d1, d2],
      [d3, d4],
    ];

    function isWithinRange(date, range) {
      return isWithinInterval(date, { start: range[0], end: range[1] });
    }
    
    function isWithinRanges(date, ranges) {
      return ranges.some(range => isWithinRange(date, range));
    }

    function tileDisabled({ date, view }) {
      // Add class to tiles in month view only
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is within any of the ranges
        return isWithinRanges(date, disabledRanges);
      }
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
                ref={locationRef}
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
                selectRange={true}
                isOpen={calendarVisibility}
                minDate={new Date()}
                className={styles.customCalendar}
                showDoubleView={!isMobile && !isTablet}
                closeCalendar={false}
                inputRef={calendarRef}
                tileDisabled={tileDisabled}
              />
            ) : null}
          </div>
          <Button handleButtonClick={handleButtonClick} text={"Buscar"} color={"secondary"} />
        </div>
      </div>
    );
}