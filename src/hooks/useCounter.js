import { useState } from "react";

const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        if(counter === 0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };
}

export default useCounter;