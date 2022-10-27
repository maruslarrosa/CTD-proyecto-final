import { useEffect, useState } from "react";

export const UseEmailValidation = (email = '') => {
  const [validEmail, setValidEmail] = useState(null);
  const regex = new RegExp(
   '^([a-zA-Z0-9._:$!%-]{2,})+@([a-zA-Z0-9.-]{2,})+.([a-zA-Z]{1,6})$'
);
  
  useEffect(() => {
    setValidEmail(regex.test(email));
  }, [email]);

  return validEmail;
}