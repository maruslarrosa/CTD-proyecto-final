import styles from '../styles/button.module.css'

export const Button = ({text, label, color, handleButtonClick}) => {

  const buttonClass = styles[color]
  
  return (
    <>
      {handleButtonClick ? (
        <button label={label} className={buttonClass} onClick={handleButtonClick}>
          <span>{text}</span>
        </button>
      ) : (
        <button label={label} className={buttonClass}>
          <span>{text}</span>
        </button>
      )}
    </>
  );

}
