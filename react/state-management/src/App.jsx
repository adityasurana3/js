import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count setCount={setCount} />
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}){
  return (
    <>
      <CounteRenderer />
      <Button setCount={setCount} />
    </>
  )
}

function CounteRenderer(){
  const count = useContext(CountContext)
  return(
    <div>
    {count}
    </div>
  )
}

function Button({setCount}){
  const count = useContext(CountContext)
  return (
    <>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrement</button>
    </>
  )
}

export default App
