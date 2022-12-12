import styles from "../styles/createProduct.module.css";
import { useEffect, useState } from "react";
import { getCategories, getCharacteristics, getCities } from "../services";
import { Button } from "./Button";

export const CreateProduct = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))  
    getCharacteristics()
        .then(response => handleNewCharacteristics(response))
    getCities()
      .then((response) => setCities(response))
      .finally(() => setLoading(false));
    return () => {};
  }, []);

  const handleNewCharacteristics = (data) => {
    let characteristicArray = []
    data.forEach(c => {
        characteristicArray.push({
          name: c.name,
          iconUrl: c.iconUrl,
          selected: false
        });
    })
    setCharacteristics(characteristicArray)
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear propiedad</h2>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <form className={styles.form}>
          <div className={styles.propertyData}>
            <div className={styles.column}>
              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="name">
                  Nombre de la propiedad
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  aria-describedby="Nombre de la propiedad"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="category" className={styles.label}>
                  Categoría
                </label>
                <select
                  className={styles.select}
                  id="category"
                  placeholder="Categoría"
                  name="category"
                  required
                >
                  {categories.map((category) => (
                    <option>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="address">
                  Dirección
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="address"
                  name="address"
                  required={true}
                  aria-describedby="Dirección"
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="city" className={styles.label}>
                  Ciudad
                </label>
                <select
                  className={styles.select}
                  id="city"
                  placeholder="Ciudad"
                  name="city"
                  required
                >
                  {cities.map((city) => (
                    <option>{city.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <label className={styles.label} htmlFor="description">
              Descripción
            </label>
            <textarea
              className={styles.description}
              type="text"
              id="description"
              name="description"
              required={true}
              aria-describedby="Descripción"
            />
          </div>
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor="characteristics" className={styles.label}>
                Características
              </label>
              <div className={styles.characteristicsContainer}>
                {characteristics.map((characteristic) => (
                  <div
                    className={styles.characteristic}
                  >
                    <p>{characteristic.name}</p>
                    <img src={characteristic.iconUrl} className={styles.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
{/* Apartir de aquí empiezo a editar */}
          {/* Bloque políticas del producto */}
          <div className={styles.propertyData}>
                  <label className={styles.label}>
                    Políticas del producto
                  </label>
                  {/* Columna Normas */}
                  <div className={styles.column}>
                    <div className={styles.inputContainer}>
                      <label className={styles.label} htmlFor="policies">
                        Normas de la casa
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        aria-describedby="Normas de la casa"
                      />
                    </div>
                  </div>
                  {/* Columna Salud y Seguridad */}
                  <div className={styles.column}>
                    <div className={styles.inputContainer}>
                      <label className={styles.label} htmlFor="policies">
                        Salud y seguridad
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        aria-describedby="Salud y seguridad"
                      />
                    </div>
                  </div>
                  {/* Columna Política de cancelación */}
                  <div className={styles.column}>
                    <div className={styles.inputContainer}>
                      <label className={styles.label} htmlFor="policies">
                        Política de cancelación
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        aria-describedby="Política de cancelación"
                      />
                    </div>
                  </div>      
          </div> 
          {/* Bloque Imagenes */}           
          <div>
            <div className={styles.inputContainer}>
              <label htmlFor="" className={styles.label}>
                Cargar imágenes
              </label>
              <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  aria-describedby="URL imagen"
                />
            </div>
          </div>
          <Button text="Crear" label="Crear producto" color="primary"/>
        </form>
      )}
    </div>
  );
};
