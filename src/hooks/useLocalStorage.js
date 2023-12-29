import { useEffect, useState } from 'react'

function getLocalStorage(name, initialValue) {
    const localValue = JSON.parse(localStorage.getItem(name));
    if (localValue) return localValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(name, initialValue) {
    const [value, setValue] = useState(() => {
        return getLocalStorage(name, initialValue);
    });

    useEffect(() => {
        if(!!!value) return;
        localStorage.setItem(name, JSON.stringify(value));
    }, [value])

    return [value, setValue];
}