import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import styles from '../styles/searchBlock.module.css'
import { Calendar } from './Calendar'


const locaciones = [
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

export const SearchBlock = () => {
  const [modal, setModal] = useState(false)
  const [location, setLocation] = useState("")

  const handleOpenModal = (component) => {
    setModal(component)
  }
  const handleCloseModal = () => {
    setModal(false)
  }

  const handleLocation = (locacion) => {
    setLocation(locacion)
    handleCloseModal()
  }

  useEffect(() => {
    console.log(location);
  }, [location])

  return (

    <div className={styles.generalSearchContainer}>
      <h2 className={styles.title}>Busca ofertas en hoteles, casas y mucho más</h2>
      <div className={styles.searchContainer}>

        <div className={styles.searchInputContainer}>
          <div className={styles.searchInput} onClick={() => handleOpenModal("location")} >
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 20 27.8" style={{ width: "20px", fill: "#545776" }}><path className="cls-1" d="M212,344.68a10,10,0,0,0-10,10,14.27,14.27,0,0,0,1.59,6,55,55,0,0,0,7.18,11.12,1.45,1.45,0,0,0,2.5-.07,59.46,59.46,0,0,0,6.35-9.46,18,18,0,0,0,2.33-6.72A9.94,9.94,0,0,0,212,344.68Zm0,13.59a3.65,3.65,0,0,1-3.57-3.57,3.58,3.58,0,0,1,7.15,0A3.64,3.64,0,0,1,211.94,358.27Z" transform="translate(-201.95 -344.68)" /></svg>
            <p>{location ? location.provincia + " , " +location.pais : "¿A dónde vamos?" }</p>
          </div>
          {
            modal === "location" ?
              <div className={styles.searchDropdown}>
                {locaciones.map(locacion =>
                  <div key={locacion.id} className={styles.dropDown} onClick={() => handleLocation(locacion)}>
                    <div><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 20 27.8" style={{ width: "20px", fill: "#545776" }}><path className="cls-1" d="M212,344.68a10,10,0,0,0-10,10,14.27,14.27,0,0,0,1.59,6,55,55,0,0,0,7.18,11.12,1.45,1.45,0,0,0,2.5-.07,59.46,59.46,0,0,0,6.35-9.46,18,18,0,0,0,2.33-6.72A9.94,9.94,0,0,0,212,344.68Zm0,13.59a3.65,3.65,0,0,1-3.57-3.57,3.58,3.58,0,0,1,7.15,0A3.64,3.64,0,0,1,211.94,358.27Z" transform="translate(-201.95 -344.68)" /></svg></div>
                    <div className={styles.location}>
                      <p>{locacion.provincia}</p>
                      <p>{locacion.pais}</p>
                    </div>
                  </div>
                )}
              </div> : null
          }
        </div>

        <div className={styles.searchInputContainer}>
          <div className={styles.searchInput} onClick={() => handleOpenModal("date")}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 20 27.8" style={{ width: "20px", fill: "#545776" }}><path className="cls-1" d="M212,344.68a10,10,0,0,0-10,10,14.27,14.27,0,0,0,1.59,6,55,55,0,0,0,7.18,11.12,1.45,1.45,0,0,0,2.5-.07,59.46,59.46,0,0,0,6.35-9.46,18,18,0,0,0,2.33-6.72A9.94,9.94,0,0,0,212,344.68Zm0,13.59a3.65,3.65,0,0,1-3.57-3.57,3.58,3.58,0,0,1,7.15,0A3.64,3.64,0,0,1,211.94,358.27Z" transform="translate(-201.95 -344.68)" /></svg>
            <p>Check in - Check out</p>
          </div>
          {
            modal === "date" ?
              <div className={styles.searchDatePicker}>
                <Calendar />
              </div>
              : null}
        </div>

        <Button
          text={"Buscar"}
          color={"secondary"}
        />

      </div>

    </div>
  )
}
