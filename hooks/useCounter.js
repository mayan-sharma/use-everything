import { useState } from 'react';

const useCounter = (initial = 0) => {
    
    const [val, set] = useState(initial);

    const inc = (value = 1) => {
        set(val+value);
    }

    const dcr = (value = 1) => {
        set(val-value);
    }

    const reset = () => {
        set(initial);
    }

    return { val, inc, dcr, set, reset };
}

export default useCounter;