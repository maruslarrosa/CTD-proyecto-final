import styles from "../styles/footer.module.css"
import iconFacebook from '../assets/iconFacebook.png'
import iconInstagram from '../assets/iconInstagram.png'
import iconLinkedin from '../assets/iconLinkedin.png'
import iconTwitter from '../assets/iconTwitter.png'

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div>© Digital Booking 2022</div>
            <div className={styles.iconContainer}>
            <img src={iconFacebook} className={styles.icon} alt="Icono redirección a Facebook"/>
            <img src={iconInstagram} className={styles.icon} alt="Icono redirección a Instagram"/>
            <img src={iconLinkedin} className={styles.icon} alt="Icono redirección a Linkedin"/>
            <img src={iconTwitter} className={styles.icon} alt="Icono redirección a Twitter"/>
            </div>
        </div>
    )
}