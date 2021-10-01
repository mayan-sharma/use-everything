import { useState } from 'react';

const useTest = () => {
    
    const [val, setVal] = useState(0);
    
    return { val, setVal };
}

export default useTest;