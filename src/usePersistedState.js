import {useEffect, useState} from "react";

const usePersistedState = (key, initialValue) => {
    const lsItem = localStorage.getItem(key);
    const [value, setValue] = useState(lsItem !== null ? JSON.parse(lsItem) : initialValue); //pointers to value and setValue

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]); //updates when value changes

    return [value, setValue];
}

export default usePersistedState;