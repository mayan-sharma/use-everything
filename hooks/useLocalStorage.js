import { useState, useEffect } from 'react';

const useLocalStorage = (key, value = null) => {
    
    const [storedValue, setStoredValue] = useState(value);

    useEffect(() => {
        let storedValue = localStorage.getItem(key);
        storedValue = storedValue ? JSON.parse(storedValue) : null;
        setStoredValue(storedValue);
    })

    const setItem = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    const removeItem = () => {
        setStoredValue(null);
        localStorage.removeItem(key);
    }

    return { item: storedValue, setItem, removeItem };
}

export default useLocalStorage;