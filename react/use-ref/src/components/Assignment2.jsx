import { useRef, useState } from "react";

export function Assignment2(){
    const [count, setCount] = useState(0)
    const numRender = useRef(0)
    const handleRerender = () =>{
        setCount(count+1)
    }
    numRender.current = numRender.current+1
    return(
        <>
        <p>This component has render {numRender.current} times.</p>
        <button onClick={handleRerender}>Force re-render</button>
        </>
    )
}