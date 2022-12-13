import styles from "../styles/createProduct.module.css";
import { useEffect, useState } from "react";
import { getCategories, getCharacteristics, getCities } from "../services";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";


export const CreateProduct = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  //Token que del admin logueado
  const [userName, setUserName] = useState(window.sessionStorage.getItem('bookingUser'))

  useEffect(() => {
    setUserName(window.sessionStorage.getItem('bookingUser'))
  }, [])

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response))
    getCharacteristics()
      .then(response => handleNewCharacteristics(response))
    getCities()
      .then((response) => setCities(response))
      .finally(() => setLoading(false));
    return () => { };
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

  // Hacer el post y manejar el comportamiento
  const handleButtonClick = () => {
    const submitForm = (event) => {
      event.preventDefault();
      if (true) {
        event.preventDefault();
      } else {
        //const formattedUser = formatUser(event.target);
        // Esto es el cuerpo del post que tengo que copiar para crear Producto
        fetch(
          "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/usuarios",
          {
            method: "POST",
            // crear objeto JSON con datos de producto
            // Usar de ejemplo la función FormatdUsser de linea 35
           //body: JSON.stringify(formattedUser),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((responseData) => {
            //console.log(data);
            navigate("/successProduct");
          });
      }
    }; 
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear propiedad</h2>
      {/* {loading ? (
        <p>Cargando</p>
      ) : ( */}
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
              Agregar características
            </label>
            <div className={styles.characteristicsContainer}>
              {characteristics.map((characteristic) => (
                <div
                  className={styles.characteristic}
                >
                  <input type="checkbox" name="characteristics" value={characteristic.name}/>
                  <label>{characteristic.name}</label>
                  <img src={characteristic.iconUrl} className={styles.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
{/* Apartir de aquí empiezo a escribir */}
        {/* Bloque políticas del producto */}
            <label className={styles.label} style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize:' 20px'}}>
              Políticas del producto
            </label>
        <div className={styles.propertyData}>
          {/* Columna Normas */}
          <div className={styles.column}>
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="policies">
                Normas de la casa
              </label>
              <div className={styles.label}>
                  Descripción
                </div>
              <input
                className={styles.description}
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
              <div className={styles.label}>
                  Descripción
                </div>
              <input
                className={styles.description}
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
              <div className={styles.label}>
                  Descripción
                </div>
              <input
                className={styles.description}
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
          <div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '15rem'}}>
            {/* <label htmlFor="imageName" className={styles.label} style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize:' 20px'}}>
              Cargar imágenes
            </label> */}
            <h3 style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize:' 20px'}}>Cargar imágenes </h3>
            {/* // cargar imagen */}
            <div>
              <input
              className={styles.input}
              type="text"
              id="imageName"
              name="name"
              required={true}
              aria-describedby="nombreImagen"
              placeholder="Nombre imagen"
            />
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              required={true}
              aria-describedby="URL imagen"
              placeholder="URL de la imagen"
            />
            </div>
            
            <div className= {styles.addImageContainer}>
              <Button text="+" label="sumarImg" color="primary" />
            </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="Crear" label="Crear producto" color="third" handleButtonClick={handleButtonClick} style={ {width: '3rem'}} />
        </div>

      </form>
      {/* )} */}
    </div>
  );
};
