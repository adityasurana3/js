import { useCallback } from "react"
import { useState } from "react"


export function Assignment2(){
    const [inputText, setInputText] = useState('')

    const showAlert = useCallback(()=>{
        return alert(inputText)
        
    },[inputText])
    

    return (
        <>
            <input placeholder="Enter some text" value={inputText} type="text" onChange={(e)=>{
                setInputText(e.target.value)
            }}/>
            <ButtonContainer handleAlert={showAlert} />
        </>
    )
}


function ButtonContainer({handleAlert}){
    return(
        <button onClick={handleAlert}>Show Alert</button>
    )
}