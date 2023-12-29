import { useEffect, useState } from 'react';

export function useInput(initialValue, isRequired=false) {
    const [value, setValue] = useState(null);
    const [invalid, setInvalid] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(()=>{

        setInvalid(false)
        // setValue(initialValue)

        if(isRequired){
            setMessage("Input is required");
        }
        if(!!!value && isRequired){
            setInvalid(true)
        }
    },[value])

    return [value, invalid, message, setValue]
}
