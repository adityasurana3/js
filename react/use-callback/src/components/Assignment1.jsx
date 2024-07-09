import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react"

export function Assignment1(){
    const [count, setCount] = useState(0);
    const handleIncrement = useCallback(() => {
        setCount(count => count+1) 
    }, [])

    const handleDecrement = useCallback(() => {
            setCount(count => count-1)
    },[])
    return(
        <>
            <p>Count: {count}</p>
            <CounterButton onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </>
    )
    
}

const CounterButton = memo(({onIncrement, onDecrement}) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))