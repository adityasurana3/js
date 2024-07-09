import { useMemo, useState } from "react"


export function Assignment3(){
    const [items, setItems] = useState([
        {'name':'Choclates', 'value': 10},
        {'name':'Chips', 'value': 7},
        {'name':'Onion', 'value': 101},
        {'name':'Tomato', 'value': 121},
    ])
    // const totalValue = useMemo(()=>{
        // var totalValue = 0;
        // for(let i=0;i<items.length;i++){
        //     totalValue += items[i].value
        // }
        // return totalValue
        const totalValue1 = useMemo(() => {
            const totalValue = items.reduce((acc, item) => {
                return acc += item.value
            },0)
            return totalValue
        })
        

          
        // items.reduce((acc,i) => returnacc+=i.value)
    // }, [items])
    
    
    return(
        <>
        <div>
            <ul>
            {items.map((i, index) => 
            <li key={index}>{i.name} - Price: ${i.value}</li>
            )}
            </ul>
            
            <p>Tota price: {totalValue1}</p>
        </div>

        </>
    )
} 