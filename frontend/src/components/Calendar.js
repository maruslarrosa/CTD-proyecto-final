import React, { useEffect, useState } from 'react'
import styles from '../styles/calendar.module.css'

export const Calendar = () => {
    const [prevMonth, setPrevMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, days: 30 })
    const [nextMonth, setNextMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 2, days: 30 })
    const [datePicked, setDatePicked] = useState({ startDate: new Date().getDate(), endDate: 5 })
    const [contador, setContador] = useState(0)
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    const handleMonths = (state) => {
        let date = new Date()
        let monthPrev
        let monthNext
        if (state === "prev") {
            monthPrev = date.getMonth() + contador;
            monthNext = date.getMonth() + contador + 1;
            setContador((contador) => contador - 1)

        } else {
            monthPrev = date.getMonth() + contador + 1;
            monthNext = date.getMonth() + contador + 2;
            setContador((contador) => contador + 1)
        }
        let year = date.getFullYear();

        let daysInPrevMonth = new Date(year, monthPrev, 0).getDate()
        let daysInNextMonth = new Date(year, monthNext, 0).getDate()

        setPrevMonth({ year, month: monthPrev, days: daysInPrevMonth })
        setNextMonth({ year, month: monthNext, days: daysInNextMonth })
    }

    useEffect(() => {
        handleMonths("prev")
    }, [])
    useEffect(() => {
        // allows to re-render when month changes
    }, [prevMonth, nextMonth])



    return (
        <div style={{display: 'flex'}}>

            <div style={{ width: "50%" }}>
                <div className={styles.month}>
                    <li onClick={() => handleMonths("prev")} className={styles.prev}>&#10094;</li>
                    <ul>
                        <li>
                            {meses.filter((month, index) => index === prevMonth.month)}
                        </li>
                    </ul>
                </div>

                <ul className={styles.weekdays}>
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                </ul>

                <ul className={styles.days}>
                    {
                        Array.from(Array(prevMonth.days)).map((day, index) =>
                            <li key={index}><span className={datePicked.startDate < index+1 ? styles.active : null} onClick={()=>setDatePicked({ ...datePicked , startDate: index+1 })}>{index+1}</span></li>
                        )
                    }

                </ul>
            </div>
            <div style={{ width: "50%" }}>
                <div className={styles.month}>
                    <li onClick={() => handleMonths("next")} className={styles.next}>&#10095;</li>
                    <ul>
                        <li>
                            {meses.filter((month, index) => index === nextMonth.month)}
                        </li>
                    </ul>
                </div>

                <ul className={styles.weekdays}>
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                </ul>

                <ul className={styles.days}>
                    {
                        Array.from(Array(nextMonth.days)).map((day, index) =>
                            <li key={index}><span className={datePicked.endDate > index+1 ? styles.active : null}  onClick={()=>setDatePicked({ ...datePicked , endDate: index+1})}>{index+1}</span></li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}
