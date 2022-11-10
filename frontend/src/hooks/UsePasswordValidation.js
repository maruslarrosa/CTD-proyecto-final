import { useState, useEffect } from "react";

export const UsePasswordValidation = ({password = '', confirmPassword = ''}) => {
    const [validLength, setValidLength] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        setValidLength(password.length >= 6 ? true : false);
        setMatch(password && password === confirmPassword)
    }, [password, confirmPassword])

    return [validLength, match]
}

