import { useState } from 'react';

export default function useInput(initialValue = ""){
    const[todoValue, setValue]=useState(initialValue)

    const onChange = (event) =>{
        setValue(event.target.value)
    }

    const reset = () => {
        setValue("")
    }

    return{
        todoValue,
        onChange,
        reset
    }
}