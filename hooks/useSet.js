import { useState } from "react";

const useSet = () => {

    const [set, setSet] = useState(new Set());

    const add = value => {
        const newSet = new Set([...Array.from(set), value]);
        setSet(newSet);
    }

    const remove = value => {
        const newSet = new Set([...Array.from(set).filter(item => item !== value)]);
        setSet(newSet);
    }

    const has = value => {
        return set.has(value);
    }

    return { set, add, remove, has };
}

export default useSet;