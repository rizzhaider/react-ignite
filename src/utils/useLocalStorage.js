import { useState } from "react"
const useLocalStorage = () => {

    const [localStorgaeValue, setLocalStorageValue] = useState()
   
    const setValue = (key='', value=null) => {
        localStorage.setItem(key, JSON.stringify(value));
        setLocalStorageValue(JSON.parse(localStorage.getItem(key)))
    }

    const getValue = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }

    const removeValue = (key) => {
        localStorage.removeItem(key);
        setLocalStorageValue(undefined);
    }

    const clearAll = () => {
        localStorage.clear();
    }


    return [
            localStorgaeValue,
            setValue, 
            getValue, 
            removeValue,
            clearAll];
    
}


export default useLocalStorage;