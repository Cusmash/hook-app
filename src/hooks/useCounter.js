import { useState } from "react"

export const useCounter = ( initialValue = 10 ) =>{

    const [counter, setCounter] = useState( initialValue )

    //al recibir el evento como parametro, se haya declarado o no
    //este manda todo el objeto del evento, no el event.value.target
    //por lo que arroja un [object Object], que es como si a un objeto
    //se le hiciera un obj.toString()
    const increment = ( value = 1 ) => {
        setCounter( (current) => current + value)
    }

    const decrement = ( value = 1 ) => {
        if( counter === 0) return
        setCounter( (current) => current - value)
    }

    const reset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}