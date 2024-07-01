import { useMemo, useState } from "react"


export function Assignment1(){
    const [input, setInput] = useState(0)


    const fact_usemomo = useMemo(()=>{
        let fact = 1
        for(let i=1;i<=input;i++){
            fact = fact * i;
        }
        return fact;
    }, [input])
    

    return(
        <div>
            
            <input type="text" value={input} onChange={function(e){
                setInput(Number(e.target.value))
            }}/>
            <p>calculated value: {fact_usemomo}</p>
        </div>
    )
} 