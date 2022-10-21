import styles from '../styles/button.module.css'

export const Button = ({text, label, color}) => {

    const buttonClass = styles[color]
    
    return (
      <button label={label} className={buttonClass}>
        <span>{text}</span>
      </button>
    );

}
