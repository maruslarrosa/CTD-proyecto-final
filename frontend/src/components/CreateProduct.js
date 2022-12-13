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
  const [token, setToken] = useState(window.sessionStorage.getItem('bookingUser'))

  useEffect(() => {
    setToken(window.sessionStorage.getItem('bookingUser'))
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
        id: c.id,
        name: c.name,
        iconUrl: c.iconUrl,
        checked: false
      });
    })
    setCharacteristics(characteristicArray)
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  };

  const handleChangeCheckboxes = id => {
    const copyCharacteristics = [...characteristics];
    const modifiedCharacteristics = copyCharacteristics.map(characteristics => {
      if (id === characteristics.id) {
        characteristics.checked = !characteristics.checked;
      }
      return characteristics;
    });
    setCharacteristics(modifiedCharacteristics);
  };

  const [characteristicsSelected, setCharacteristicsSelected] = useState([])

  function characteristicFetch() {
    for (let i = 0; i < characteristics.length; i++) {
      if (characteristics[i].checked) {
        // console.log("soy true", characteristics[i].name);
        characteristicsSelected[i] = {
          id: parseInt(characteristics[i].id),
        };
      }
    }
    return characteristicsSelected;
  }

  const [data, setData] = useState({
    name: '',
    description: '',
    availability: 'Disponible',
    policies: '',
    latitude: 'xxx',
    longitude: 'yyy',
    city_id: '',
    category_id: '',
    characteristicsInProducts_id: characteristicsSelected,
    imageName: '',
    imageURL: ''
  });


  const handleButtonClick = (event) => {

    event.preventDefault();

    characteristicFetch()

    const producto = {
      name: data.name,
      description: data.description,
      availability: "Disponibilidad",
      policies: data.policies,
      longitude: "xxx",
      latitude: "yyy",
      images: [
        {
          name: data.imageName,
          url: "asd"
        }
      ],
      city_id: {
        id: data.city_id
      },
      category_id: {
        id: data.category_id
      },
      // characteristicsInProducts_id: characteristicsSelected
      characteristicsInProducts_id: [
        {
          "id": "2"
        },
        {
          "id": "1"
        },
        {
          "id": "3"
        }
      ]
    }

    console.log(producto);

    fetch(
      "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/productos",
      {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      }
    )
      .then((response) => {
        console.log(response)
      })
      .then((responseData) => {
        console.log(responseData);
        navigate("/successProduct")
      })
      .catch(error => console.log(error))
  };

  const handleButtonClick2 = (event) => {
    const producto = {
      name: "Hotel Prueba 10",
      description: "Conoce el mejor Hotel de la ciudad",
      availability: "Disponibilidad",
      policies: "políticas",
      longitude: "xxx",
      latitude: "yyy",
      images: [
        {
          name: "Imagen 2",
          url: "https://www.imagen-1.jpg/"
        }
      ],
      city_id: {
        id: "1"
      },
      category_id: {
        id: "1"
      },
      characteristicsInProducts_id: [
        {
          id: "2"
        }
      ]
    }
    event.preventDefault();
    fetch(
      "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/productos",
      {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        mode: 'no-cors'
      }
    )
      .then((response) => {
        console.log(response)
      })
      .then((responseData) => {
        console.log(responseData);
        navigate("/successProduct")
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear propiedad</h2>
      {/* {loading ? (
        <p>Cargando</p>
      ) : ( */}
      <form className={styles.form} onSubmit={handleButtonClick}>
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
                onChange={handleChange}
                //required={true}
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
                name="category_id"
                onChange={handleChange}
              //required
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.id}>{category.name}</option>
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
                // onChange={handleChange}
                //required={true}
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
                name="city_id"
                onChange={handleChange}
              //required
              >
                {cities.map((city) => (
                  <option key={city.name} value={city.id}>{city.name}</option>
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
            onChange={handleChange}
            //required={true}
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
                  className={styles.characteristic} key={characteristic.id}
                >
                  <input
                    type="checkbox"
                    name="characteristicsInProducts_id"
                    checked={characteristic.checked}
                    onChange={() => handleChangeCheckboxes(characteristic.id)}
                    value={characteristic.id}
                  />
                  <label htmlFor="characteristicsInProducts_id">{characteristic.name}</label>
                  <img src={characteristic.iconUrl} className={styles.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Apartir de aquí empiezo a escribir */}
        {/* Bloque políticas del producto */}
        <label className={styles.label} style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize: ' 20px' }}>
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
                onChange={handleChange}
                id="policies"
                name="policies"
                //required={true}
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
                //required={true}
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
                //required={true}
                aria-describedby="Política de cancelación"
              />
            </div>
          </div>
        </div>
        {/* Bloque Imagenes */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '15rem' }}>
            {/* <label htmlFor="imageName" className={styles.label} style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize:' 20px'}}>
              Cargar imágenes
            </label> */}
            <h3 style={{ display: 'flex', marginBottom: '5px', marginTop: '20px', fontSize: ' 20px' }}>Cargar imágenes </h3>
            {/* // cargar imagen */}
            <div>
              <input
                className={styles.input}
                type="text"
                id="imageName"
                name="imageName"
                //required={true}
                aria-describedby="nombreImagen"
                placeholder="Nombre imagen"
                onChange={handleChange}
              />
              <input
                className={styles.input}
                type="text"
                id="imageURL"
                onChange={handleChange}
                name="imageURL"
                //required={true}
                aria-describedby="URL imagen"
                placeholder="URL de la imagen"
              />
            </div>

            <div className={styles.addImageContainer}>
              <Button text="+" label="sumarImg" color="primary" />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="Crear" label="Crear producto" color="third" handleButtonClick={handleButtonClick} style={{ width: '3rem' }} />
        </div>

      </form>
      {/* )} */}
    </div>
  );
};
