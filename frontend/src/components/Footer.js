import styles from '../styles/footer.module.css'
import { useContext } from 'react';
import { iconFacebook, iconInstagram, iconLinkedin, iconTwitter } from '../assets'
import { GlobalContext } from '../GlobalContext';

export const Footer = () => {
  const isMobile = useContext(GlobalContext)

    const socialIcons = () => {
        return (
            <div className={styles.iconContainer}>
            <img
              src={iconFacebook}
              className={styles.icon}
              alt="Icono redirección a Facebook"
            />
            <img
              src={iconInstagram}
              className={styles.icon}
              alt="Icono redirección a Instagram"
            />
            <img
              src={iconLinkedin}
              className={styles.icon}
              alt="Icono redirección a Linkedin"
            />
            <img
              src={iconTwitter}
              className={styles.icon}
              alt="Icono redirección a Twitter"
            />
          </div>
        )
    }

    return (
      <div className={styles.footer}>
        <div>© Digital Booking 2022</div>
        {
            isMobile ? null : socialIcons()
        }

      </div>
    );
}