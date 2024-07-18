import { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  let count = useMemo(()=>{
    let finalCount = 0
    for (let i = 1; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  },[inputValue])

  

  function calculateSum(){
    setCounter(counter+1)
  }
  return(
  <>
    <input type="text" onChange={function(e){
      setInputValue(e.target.value)
    }}/> <br />
    <h1>Sum is 1 to {inputValue} is {count}</h1>
    <button onClick={calculateSum}>Counter ({counter})</button>
  </>
  )
}


export default App;
