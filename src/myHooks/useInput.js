import { useState } from 'react';

export default function useInput(initialValue = ""){
    const[todoValue, setValue]=useState(initialValue)

    const onChange = (event) =>{
        const { type,checked,value} = event.target
        console.log(event,type,checked,value)
        setValue(type === "checkbox" ? checked : value)
        console.log(todoValue,"?")
    }

    const reset = () => {
        setValue(initialValue)
    }

    return{
        todoValue,
        setValue,
        onChange,
        reset
    }
}