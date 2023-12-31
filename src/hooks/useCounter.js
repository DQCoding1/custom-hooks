import { useState } from "react"

const useCounter = (initialCount) => {
    const [counter, setCounter] = useState(initialCount)

    const increment = () => {
        setCounter(counter+1)
    }
    const decrement = () => {
        setCounter(counter-1)
    }
    const reset = () => {
        setCounter(initialCount)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

export default useCounter