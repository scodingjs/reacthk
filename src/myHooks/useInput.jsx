import { useState } from 'react';

export default function useInput(initialValue = ""){
    const[value, setValue]=useState(initialValue)

    const onChange = (event) =>{
        setValue(event.target.vaue)
    }

    const reset = () => {
        setValue("")
    }

    return{
        value,
        onChange,
        reset
    }
}