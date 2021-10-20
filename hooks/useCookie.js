import { useState, useEffect } from 'react';

const useCookie = (key, value = null) => {
    
    const [storedValue, setStoredValue] = useState(value);

    useEffect(() => {
        const cookie = getCookie(key);
        setStoredValue(cookie);
        setCookie(value);
    }, []);

    const getCookie = name => {
        const cookieName = name + '=';
        const decoded = decodeURIComponent(document.cookie);
        const res = decoded.split('; ').find(val => val.indexOf(cookieName) === 0);
        return res ? res.substring(cookieName.length) : null;
    }

    const setCookie = value => {
        setStoredValue(value);
        document.cookie = `${key}=${value}`
    }

    const removeCookie = () => {
        document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setStoredValue(null);
    }

    return { cookie: storedValue, setCookie, removeCookie };
}

export default useCookie;