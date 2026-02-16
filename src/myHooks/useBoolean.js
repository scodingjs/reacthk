import {useState, useCallback} from "react";

export default function useBoolean (initialValue = false) {
    const [value, setValue] = useState(initialValue)
    const setTrue = useCallback(() => setValue(true),[])
    const setFalse = useCallback(() => setValue(false),[])
    const toggle = useCallback((prev) => setValue(!prev) ,[])
    return {value,setTrue,setFalse,toggle}
}