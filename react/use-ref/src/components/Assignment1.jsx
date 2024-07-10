import { useEffect, useRef } from "react"

export function Assignment1(){
    let inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[inputRef])
    function handleFocus(){
        inputRef.current.focus()
    }
    return(
        <>
        <input ref={inputRef} placeholder="Write something here" type="text" />
        <button onClick={handleFocus}>Focus Input</button>
        </>
    )
}